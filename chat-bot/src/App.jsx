import React, { useState, useRef, useEffect} from 'react';
import './output.css';
import robot from './assets/robot.png';
import person from './assets/person.png';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState('');
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const msgEndRef = useRef(null);

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
  };

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: 'user',
        parts: [
          {
            text: 'from now on i will give our chat history along with the questions i want to ask . make sure to reply only after carefully understanding the history . in the history the model is you. if the history is not provied then dont mention history not provided and reply normally . input1 contains current query and input2 contains the history dont mention anything about inputs\n',
          },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'Okay, I understand.  Please provide the chat history and your question. I will read it carefully and provide a relevant and appropriate response. \n',
          },
        ],
      },
    ],
  });

  useEffect(() => {
    msgEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function handleSendMessage() {
    if (input.trim()) {
      const sentMessage = {
        id: messages.length + 1,
        type: 'sent',
        text: input,
      };
      const loadingMessage = {
        id: messages.length + 2,
        type: 'received',
        text: 'Thinking...',
      };
      setMessages([...messages, sentMessage, loadingMessage]);

      const result = await chatSession.sendMessage(
        `input1:${input}\ninput2:${history}`
      );
      const receivedMessage = {
        id: messages.length + 2,
        type: 'received',
        text: result.response.text(),
      };

      setMessages([...messages, sentMessage, receivedMessage]);
      const userInput = 'user:' + input + '\n';
      const modelResponse = 'model:' + result.response.text();
      setHistory(history + userInput + modelResponse);
      setInput('');
    }
  }

  return (
    <div className="flex flex-col h-screen w-screen text-lg">
      <header className="bg-primary text-primary-foreground px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="relative flex shrink-0 overflow-hidden rounded w-8 h-8 p-[1%]">
            <img
              className="aspect-square h-full w-full"
              alt="Chatbot"
              src={robot}
            />
          </span>
          <h2 className="text-lg font-medium">Chatbot</h2>
        </div>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 w-10 text-primary-foreground hover:bg-primary/20"></button>
      </header>
      <div className="flex-1 overflow-auto p-4 space-y-4 sm:mx-20" id="chat">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-4 ${
              message.type === 'sent' ? 'justify-end' : ''
            }`}>
            <span
              className={`relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border ${
                message.type === 'sent' ? 'hidden' : ''
              }`}>
              <img
                className="aspect-square p-1 w-full bg-cyan-400"
                alt="chatbot"
                src={robot}
              />
            </span>
            <div
              className={`${
                message.type === 'sent'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              } rounded-2xl p-3 max-w-[75%] markdown prose `}>
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
            <span
              className={`relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border ${
                message.type === 'received' ? 'hidden' : ''
              }`}>
              <img
                className="aspect-square p-1 w-full bg-cyan-400"
                alt="user"
                src={person}
              />
            </span>
          </div>
        ))}
        <div ref={msgEndRef}/>
      </div>
      <div className=" flex justify-center">
        <div className="bg-background rounded-2xl border-t px-4 py-3 flex items-center gap-2 w-[75%] m-10">
          <textarea
            className="resize-none flex min-h-[50px] w-full ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 rounded-lg border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Type your message..."
            rows="1"
            value={input}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSendMessage();
                setInput('');
              }
            }}
            onChange={(e) => setInput(e.target.value)}></textarea>
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 w-15 p-4 rounded text-primary-foreground hover:bg-primary/20"
            onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
      <SpeedInsights/>
    </div>
  );
};

export default App;

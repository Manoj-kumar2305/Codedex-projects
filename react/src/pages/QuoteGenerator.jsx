import Header from '../components/Header.jsx'
import { useState } from 'react'

export default function QuoteGenerator() {
    const quotes = [
        "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
        "The best way to predict the future is to create it. - Peter Drucker",
        "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "It always seems impossible until it’s done. - Nelson Mandela",
        "I am not afraid... I was born to do this. - Joan of Arc",
        "Believe you can and you’re halfway there. - Theodore Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "Act as if what you do makes a difference. It does. - William James",
        "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
      ];
      const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
      function handleQoute(){
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        document.getElementById('quote-box').style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      }
      return (
        <>
          <Header />
          <div id="quote-box">
            <p id="text">{quote}</p>
            <button id="new-quote" onClick={handleQoute}>
              New Quote
            </button>
          </div>
        </>
      );
    }      
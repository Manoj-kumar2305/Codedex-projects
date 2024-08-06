import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Question from './components/Question';
import Results from './components/Results';
import UserForm from './components/UserForm';
import { UserProvider } from './components/UserContext';
import About from './components/About';
const questions = [
  {
    question: "How do you prefer to spend your free time?",
    options: ["Running in the park 🏃‍♂️", "Cuddling at home 🏡", "Playing fetch 🎾", "Exploring new places 🌏"],
  },
  {
    question: "What is your favorite type of food?",
    options: ["Meaty treats 🍖", "Healthy snacks 🥗", "Homemade meals 🍲", "Anything edible 🍪"],
  },
  {
    question: "What describes your ideal weekend?",
    options: ["Going on a long walk 🚶‍♂️", "Lounging around 🛋️", "Visiting friends 👫", "Learning new tricks 🧠"],
  },
  {
    question: "Which of these traits best describes you?",
    options: ["Energetic and playful 🤸", "Loyal and loving ❤️", "Curious and adventurous 🕵️", "Calm and relaxed 😌"],
  },
  {
    question: "How do you prefer to communicate with others?",
    options: ["Barking loudly 🐶", "Snuggling up 🥰", "Playing together 🤗", "Exploring together 🌍"],
  },
  {
    question: "How would you describe your style?",
    options: ["Sporty and active 🏅", "Casual and comfy 🧥", "Stylish and chic 👗", "Quirky and fun 🎩"],
  },
];
const elements = {
  "Running in the park 🏃‍♂️": "Energy",
  "Cuddling at home 🏡": "Serenity",
  "Playing fetch 🎾": "Adventure",
  "Exploring new places 🌏": "Adventure",
  "Meaty treats 🍖": "Warmth",
  "Healthy snacks 🥗": "Earth",
  "Homemade meals 🍲": "Warmth",
  "Anything edible 🍪": "Change",
  "Going on a long walk 🚶‍♂️": "Adventure",
  "Lounging around 🛋️": "Serenity",
  "Visiting friends 👫": "Harmony",
  "Learning new tricks 🧠": "Knowledge",
  "Energetic and playful 🤸": "Energy",
  "Loyal and loving ❤️": "Loyalty",
  "Curious and adventurous 🕵️": "Adventure",
  "Calm and relaxed 😌": "Serenity",
  "Barking loudly 🐶": "Fire",
  "Snuggling up 🥰": "Warmth",
  "Playing together 🤗": "Harmony",
  "Exploring together 🌍": "Adventure",
  "Sporty and active 🏅": "Energy",
  "Casual and comfy 🧥": "Earth",
  "Stylish and chic 👗": "Change",
  "Quirky and fun 🎩": "Freedom",
};
const keywords = {
  // breed : value in elements
  "Labrador": "Energy",
  "Poodle": "Change",
  "Husky": "Adventure",
  "Beagle": "Harmony",
  "Pug": "Serenity",
  "Dalmatian": "Freedom",
  "Chihuahua": "Fire",
  "Bulldog": "Loyalty",
  "Pomeranian": "Warmth",
  "Boxer": "Knowledge",
  "Dachshund": "Earth",
};

const combined = Object.keys(keywords).reduce((acc, breed) => {
  const theme = keywords[breed];
  const phrase = Object.keys(elements).find(key => elements[key] === theme);
  acc[breed] = phrase;
  return acc;
}, {});

console.log(combined);

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userName, setUserName] = useState('');
  const [element, setElement] = useState('');
  const [dogImage, setdogImage] = useState(null);
  const [breedtype, setBreed] = useState('');

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleUserFormSubmit = (name) => {
    setUserName(name);
  };

  function determineElement(answers) {
    const counts = {};
    answers.forEach(function(answer) {
      const element = elements[answer];
      counts[element] = (counts[element] || 0) + 1;
    });
    return Object.keys(counts).reduce(function(a, b) {
      return counts[a] > counts[b] ? a : b;
    });
  }
  
  const fetchdogImage = async (breed) => {
    if (!breed) {
      console.error('No breed found for selected element');
      return;
    }
    try {
      const dogImageResponse = await fetch(`https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random`);
      const dogImageData = await dogImageResponse.json();
      setdogImage(dogImageData);
      console.log('dogImage:', dogImageData);
      setBreed(breed);
    } catch (error) {
      console.error('Error fetching dogImage:', error);
    }
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      const selectedElement = determineElement(answers);
      setElement(selectedElement);
      const breed = Object.keys(keywords).find(key => keywords[key] === selectedElement);
      fetchdogImage(breed);
    }
  }, [currentQuestionIndex, answers]);

  const resetState = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setUserName('');
    setElement('');
    setdogImage(null);
  };

  return (
    <Router>
    
    <UserProvider value={{ name: userName, setName: setUserName }}>
        <Header resetState={resetState} />
        {/*reset the states */}

        <Routes>
          <Route path="/" element={<UserForm onSubmit={handleUserFormSubmit} />} />
          <Route
            path="/quiz"
            element={
              currentQuestionIndex < questions.length ? (
                <Question
                  question={questions[currentQuestionIndex].question}
                  options={questions[currentQuestionIndex].options}
                  onAnswer={handleAnswer}
                />
              ) : (
                <Results element={element} dogImage={dogImage} breedtype={breedtype} resetState={resetState}/>
              )
            }

          />
          <Route path='/about' exact element={<About/>} />
        </Routes>
    </UserProvider>
    </Router>

  );
};

export default App;

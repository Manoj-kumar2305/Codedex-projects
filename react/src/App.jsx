import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ColorPicker from './pages/ColorPicker.jsx';
import ProgressBar from './pages/ProgressBar.jsx';
import QuoteGenerator from './pages/QuoteGenerator.jsx';
import About from './pages/About.jsx';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/ColorPicker' element={<ColorPicker />} />
        <Route path='/ProgressBar' element={<ProgressBar/>} />
        <Route path='/QuoteGenerator' element={<QuoteGenerator/>} />
        <Route path='/about' element={<About/>} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const increase = () => {
    setProgress((progress + 10)%110);
  } 
  return (
    <>
    <Header />
    <div className="container">
      <div className='progressBar'>
        <h1>Progress Bar</h1>
        <div
          style={{
            width: '100%',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
          }}>
          <div
            style={{
              width: `${progress}%`,
              backgroundColor: '#007bff',
              height: '24px',
              borderRadius: '4px',
            }}></div>
        </div>
        <p>{progress}% Complete</p>
        <button id='incbtn' onClick={increase}>Increase</button>
      </div>
    </div>
    </>
  );
}

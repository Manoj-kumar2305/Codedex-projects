import React from 'react';
import { UserContext } from './UserContext';
export default function Results({ element, dogImage, breedtype, resetState }) {
  const { name } = React.useContext(UserContext);
  return (
    <div className="dogImage">
      <p>
        <strong>{name}</strong>, your element is: {element}
      </p>
      {dogImage ? (
        <div >
          <h2>{breedtype}</h2>
          <img src={dogImage.message} alt='dogImage' />
        </div>
      ) : (
        <p>Loading.....</p>
      )}
      <button onClick={resetState} id='resetbtn'>Reset</button>
    </div>
  );
}

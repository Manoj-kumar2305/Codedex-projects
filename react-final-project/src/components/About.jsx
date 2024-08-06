import React from 'react';
import linkedin from '../assets/linkedin.png';
import giticon from '../assets/github.png';
const About = () => {
    return (
        <div id='about'>
            <h1>About</h1>
            <p>This is a fun quiz to help you find out which dog breed best matches your personality. The quiz is based on completely random things, so don't take it too seriously! Have fun!</p>
            <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/manoj-kumar-mithireddy"
              target="_blank"
              rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn Icon" width={25} height={25} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Manoj-kumar2305"
              target="_blank"
              rel="noopener noreferrer">
              <img src={giticon} width={25} height={25} />
              GitHub
            </a>
          </div>
        </div>
    );
};

export default About;
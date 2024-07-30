import { Link } from 'react-router-dom';
import Header from '../components/Header';
import linkedin from '../assets/linkedin.png';
import giticon from '../assets/github.png';

export default function About() {
  return (
    <>
      <Header />
      <div id="about">
        <div className="aboutcontainer">
          <h1>Hello, I'm Manoj</h1>
          <p>
            I am a tech enthusiast who loves learning and implementing new
            technologies in my projects. A quick learner and team player, I
            embrace challenges and solve them with my skills. Self-motivated and
            hardworking, I am committed to achieving my goals and continuously
            learning. As a good listener and communicator, I enjoy helping
            others and sharing knowledge. I excel in problem-solving,
            decision-making, and leading teams to success.
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/manoj-kumar-mithireddy"
              target="_blank"
              rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn Icon" width={15} height={15} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Manoj-kumar2305"
              target="_blank"
              rel="noopener noreferrer">
              <img src={giticon} width={15} height={15} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

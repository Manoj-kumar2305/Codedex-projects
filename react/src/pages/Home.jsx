import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div id="homeLinks">
        <h1 id="selection">Select a project</h1>
        <ul id="links">
          <li>
            <Link to="/ColorPicker">Color Picker</Link>
          </li>
          <li>
            <Link to="/ProgressBar">Progress Bar</Link>
          </li>
          <li>
            <Link to="/QuoteGenerator">Quote Generator</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;

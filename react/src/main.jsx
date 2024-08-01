import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import ColorPicker from './pages/ColorPicker.jsx';
import ProgressBar from './pages/ProgressBar.jsx';
import QuoteGenerator from './pages/QuoteGenerator.jsx';
import About from './pages/About.jsx';
import Layout from './layout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home />} />
      <Route path="ColorPicker" element={<ColorPicker />} />
      <Route path="ProgressBar" element={<ProgressBar />} />
      <Route path="QuoteGenerator" element={<QuoteGenerator />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

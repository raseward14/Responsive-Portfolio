// import './App.css';
import React, { useState, useEffect } from "react";
import { CustomPicker } from 'react-color';

// imports pages
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Four from "./pages/Four";
import Layout from './components/Layout';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [backgroundColor, setBackgroundColor] = useState('')
  useEffect(() => {
    let yourColor = localStorage.getItem('your_color');
    if (yourColor !== null) {
      setBackgroundColor(yourColor);
    } else {
      setBackgroundColor('#8ED1FC');
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor} />} >
          <Route index element={<Homepage
          backgroundColor={backgroundColor} />} />
          <Route path="about" element={<About
          backgroundColor={backgroundColor} />} />
          <Route path="portfolio" element={<Portfolio
          backgroundColor={backgroundColor} />} />
          <Route path="contact" element={<Contact
          backgroundColor={backgroundColor} />} />
          <Route path="*" element={<Four />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default CustomPicker(App);

import './App.css';
import React, { useState, useEffect } from "react";
import { CustomPicker } from 'react-color';

// imports pages
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Four from "./pages/Four";

// import components
import DateTime from './components/DateTime';
import Ink from './components/Ink';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [backgroundColor, setBackgroundColor] = useState('')
  useEffect(() => {
    let yourColor = localStorage.getItem('your_color');
    if(yourColor !== null) {
      setBackgroundColor(yourColor);
    } else {
      setBackgroundColor('#8ED1FC');
    };
  }, []);
  return (
    <Router>
      <div style={{backgroundColor: backgroundColor, height: '100%'}}>
      <DateTime className="DateTime"></DateTime>
        <div id='page-body'>
          <Ink className="Ink" setBackgroundColor={setBackgroundColor}></Ink>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<Four />} />
          </Routes>
        </div>
        <div style={{height: '13vh'}}></div>
      </div>
    </Router>
  );
};

export default CustomPicker(App);

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
  Switch,
} from "react-router-dom";

function App() {
  const [backgroundColor, setBackgroundColor] = useState('')
  useEffect(() => {
    let yourColor = localStorage.getItem('your_color');
    if(yourColor !== null) {
      setBackgroundColor(yourColor);
    } else {
      setBackgroundColor('#F9B10A');
    };
  }, []);
  return (
    <Router>
      <div style={{backgroundColor: backgroundColor, height: '100%'}}>
      <DateTime className="DateTime"></DateTime>
        <div id='page-body'>
          <Ink className="Ink" setBackgroundColor={setBackgroundColor}></Ink>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route component={Four} />
          </Switch>
        </div>
        <div style={{height: '13vh'}}></div>
      </div>
    </Router>
  );
};

export default CustomPicker(App);

import './App.css';
import React, { useState } from "react";

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
  Redirect,
} from "react-router-dom";

function App() {
  // const [backgroundColor, setBackgroundColor] = useState('')
  return (
    <Router>
      <div className="App">
      <DateTime className="DateTime"></DateTime>
        <div id='page-body'>
          <Ink className="Ink"></Ink>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route component={Four} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

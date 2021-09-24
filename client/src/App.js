import './App.css';
import React from "react";

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
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <DateTime className="DateTime"></DateTime>
      {/* <Ink className="Ink"></Ink> */}
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/portfolio">
            <Portfolio />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          {/* <Route path="*">
            <Four />
          </Route> */}
        </Switch>
      </div>
    </Router>

  );
}

export default App;

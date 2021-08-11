import './App.css';
import React, { useContext } from "react";

// imports pages
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// import components
import Navbar from "./components/Navbar";
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
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/portfolio">
            <Portfolio />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

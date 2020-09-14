import React from "react";
import "./App.css";
import Header from "./header";
import HomePage from "./Home/home";
import Profile from "./profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <Router>
          <Header />
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route exact path={"/profile"} component={Profile} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

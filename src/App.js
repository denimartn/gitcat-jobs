import React from "react";
import "./App.css";
import "./NavBar.js";
import "./index.css";
import NavBar from "./NavBar.js";
import JobSearch from "./JobSearch";
import JobDetail from "./JobDetail";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/job/:id" children={<JobDetail />} />
        <Route path="/" children={<JobSearch />} />
      </Switch>
    </Router>
  );
}

export default App;

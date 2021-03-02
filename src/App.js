import React, { useState, useEffect } from "react";
import "./App.css";
import "./NavBar.js";
import "./index.css";
import axios from "axios";
import NavBar from "./NavBar.js";
import Form from "./Form";
import JobList from "./JobList";
function App() {
  const [jobs, setJobs] = useState([]);
  //description
  // location term

  useEffect(() => {
    async function fetcData() {
      try {
        let res = await axios.get(
          "https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json?description=python&location=usa"
        );
        console.log(res.data);
        setJobs(res.data)
      } catch {
        console.log("error");
      }
    }
    fetcData();
  }, []);

  return (
    <>
      <NavBar />
      <Form />
      <JobList jobs={jobs}/>
    </>
  );
}

export default App;

import React, { useState } from "react";
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

  React.useEffect(() => {
    async function fetchData() {
      let res = await axios.get(
        "https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json?description=python"
      );
      console.log(res);
      let newArr = [];
      for (let job of res.data) {
        newArr.push(job);
      }
      setJobs(newArr);
    }
    console.log(jobs);
    fetchData();
  }, [jobs]);

  return (
    <>
      <NavBar />
      <Form />
      <JobList />
    </>
  );
}

export default App;

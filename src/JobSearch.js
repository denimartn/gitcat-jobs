import React, { useEffect, useState } from "react";
import Form from "./Form";
import JobList from "./JobList";
import axios from "axios";

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [state, setState] = useState("");

  useEffect(() => {
    async function fetcData() {
      try {
        setState("loading");
        let res = await axios.get(
          "https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json?description=python"
        );
        console.log(res.data);
        setState("ready");
        setJobs(res.data);
      } catch {
        setState("error");
        console.log("error");
      }
    }
    fetcData();
  }, []);

  return (
    <>
      <Form />
      <JobList jobs={jobs} state={state} />
    </>
  );
};

export default JobSearch;

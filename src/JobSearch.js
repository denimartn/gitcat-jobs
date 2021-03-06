import React, { useEffect, useState } from "react";
import Form from "./Form";
import JobList from "./JobList";
import axios from "axios";

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetcData() {
      try {
        let res = await axios.get(
          "https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json?description=python"
        );
        console.log(res.data);
        setJobs(res.data);
      } catch {
        console.log("error");
      }
    }
    fetcData();
  }, []);
  
  return (
    <>
      <Form />
      <JobList jobs={jobs} />
    </>
  );
};

export default JobSearch;

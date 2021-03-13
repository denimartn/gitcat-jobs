import React, { useEffect, useState } from "react";
import Form from "./Form";
import JobList from "./JobList";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

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
      }
    }
    fetcData();
  }, []);


const onSubmit = values => {
  console.log(values)
}

  return (
    <>
      <Form onSubmit={onSubmit}/>
      {state === "loading" && (
        <div className="flex justify-center mt-44">
          <ClipLoader color={"#10b981"} size={150} />
        </div>
      )}
      {state === "ready" && <JobList jobs={jobs} state={state} />}
    </>
  );
};

export default JobSearch;

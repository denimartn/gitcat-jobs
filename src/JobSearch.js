import React, { useEffect, useState } from "react";
import Form from "./Form";
import JobList from "./JobList";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";
import { isEmpty } from "lodash";

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [state, setState] = useState("");

  useEffect(() => {
    async function fetcData() {
      try {
        setState("loading");
        let res = await axios.get(
          "https://cors-denise.herokuapp.com/https://jobs.github.com/positions.json?description=python"
        );
        setState("ready");
        setJobs(res.data);
      } catch {
        setState("error");
      }
    }
    fetcData();
  }, []);

  async function onSubmit(values) {
    try {
      setState("loading");
      let res = await axios.get(
        ` https://cors-denise.herokuapp.com/https://jobs.github.com/positions.json?description=${values.job}&full_time=${values.isFullTime}&location=${values.location}`
      );
      if (isEmpty(res.data)) {
        setState("empty");
      } else {
        setState("ready");
      }
      setJobs(res.data);
    } catch {
      setState("error");
    }
  }

  return (
    <>
      <Form onSubmit={onSubmit} />
      {state === "loading" && (
        <div className="flex justify-center mt-28">
          <SyncLoader color={"#4f46e5"} />
        </div>
      )}
      {state === "empty" && (
        <div className="flex justify-center mt-28">
          <div className="flex flex-col">
            <img src={process.env.PUBLIC_URL + "/assets/illustration/no-result.png"} alt="cat" className="mb-4" />
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight uppercase text-center">
              no jobs founded
            </h1>
          </div>
        </div>
      )}
      {state === "ready" && <JobList jobs={jobs} state={state} />}
    </>
  );
};

export default JobSearch;

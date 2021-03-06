import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function JobDetail({ jobs }) {
  const [job, setJob] = useState("");
  let { id } = useParams();

  useEffect(() => {
    async function fetcData() {
      try {
        let res = await axios.get(
            `https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions/${id}.json`
        );
        setJob(res.data);
      } catch {
        console.log("error");
      }
    }
    fetcData();
  }, [id]);

  return <div className="sm:px-60 px-6">{job.type}</div>;
}

export default JobDetail;

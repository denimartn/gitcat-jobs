import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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

  return (
    <div className="sm:px-60 px-6 my-16">
      <Link to="/">
        <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-500 text-white font-bold px-4 rounded-md">
          See all positions
        </button>
      </Link>
    </div>
  );
}

export default JobDetail;

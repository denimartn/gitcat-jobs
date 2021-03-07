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
        <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-500 text-white font-bold px-4 rounded-md mb-8">
          See all positions
        </button>
      </Link>
      <div className="flex w-full flex-col bg-white p-4">
        <div className="mb-8 flex">
          <div>
            <div className="text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
              {job.title}
            </div>
            <div className="text-sm truncate w-full -mt-1 text-green-500 font-bold mb-4">
              {job.type}
            </div>
          </div>
          <div className="text-right">
            <div className="mb-2 text-md truncate w-full normal-case font-normal -mt-1 text-gray-500">{job.company}</div>
            <img src={job.company_logo} alt="company logo" />
          </div>
          <hr />
        </div>
        <div className="mb-8">
          <div className="text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
            Description
          </div>
          <div className="text-gray-500 text-lg" dangerouslySetInnerHTML={{ __html: job.description }}></div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;

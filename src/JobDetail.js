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
        <button className="flex transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-500 text-white font-bold px-2 py-1 rounded-md mb-8">
          <svg
          className="w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <div>

          See all positions
          </div>
        </button>
      </Link>
      <div className="flex w-full flex-col bg-white p-4 sm:p-8">
        <div className="mb-8 flex sm:justify-between w-full">
          <div className="w-full">
            <div className="text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
              {job.title}
            </div>
            <div className="text-sm truncate w-full -mt-1 text-green-500 font-bold mb-4">
              {job.type}
            </div>
          </div>
          <div>
            <div className="text-right mb-2 text-md truncate w-full normal-case font-normal -mt-1 text-gray-500">
              {job.company}
            </div>
            <img src={job.company_logo} alt="company logo" />
          </div>
          <hr />
        </div>
        <div className="mb-8">
          <div className="text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
            Description
          </div>
          <div
            className="text-gray-500 text-lg"
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></div>
        </div>
        <div className="mb-8">
          <div className="text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
            Apply now 👇
          </div>
          <div
            className="text-gray-500 text-sm"
            dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;

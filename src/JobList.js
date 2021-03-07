import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

const onPassedDays = (date) => {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const currentDate = new Date();
  const targetDate = new Date(date);

  if (currentDate.getDay() === targetDate.getDay()) {
    return "Today";
  } else {
    const diffDays = Math.round(
      Math.abs((currentDate - targetDate) / oneDayInMilliseconds)
    );
    if (diffDays > 1) {
      return `${diffDays} days ago`;
    } else {
      return `${diffDays} day ago`;
    }
  }
};

function JobList({ jobs, state }) {
  let history = useHistory();

  const handleClick = useCallback((job) => {
    history.push(`job/${job.id}`);
  });

  return (
    <div className="sm:px-60 px-6">
      {state === "loading" && (
        <div className="text-3xl text-center mt-44 font-extrabold text-gray-900 tracking-tight mb-4">
          Loading... ✋
        </div>
      )}
      {state === "ready" && (
        <>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
            Featured job
          </h1>
          <div className="flex flex-col cursor-pointer w-full">
            <div className="flex w-full flex-col bg-white divide-y ">
              {jobs.map((job, index) => (
                <button
                  className=" text-left p-4  hover:bg-gray-50 focus:outline-none"
                  key={index}
                  onClick={() => handleClick(job)}
                >
                  <div className="flex sm:justify-between flex-col sm:flex-row">
                    <div className="mb-4">
                      <div className="mb-2">{job.title}</div>
                      <div class="mb-2 text-md truncate w-full normal-case font-normal -mt-1 text-gray-500">
                        {job.company}
                      </div>
                      <div className="text-sm truncate w-full -mt-1 text-green-500 font-bold">
                        {job.type}
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 text-md truncate w-full normal-case font-normal -mt-1 text-gray-500 sm:text-right">
                        {job.location}
                      </div>
                      <div className="text-sm truncate w-full normal-case font-normal -mt-1 text-gray-500 sm:text-right">
                        {onPassedDays(job.created_at)}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default JobList;

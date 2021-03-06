import React from "react";

const onPassedDays = (date) => {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const currentDate = new Date();
  const targetDate = new Date(date);

  if (currentDate.getDay() === targetDate.getDay()) {
    return "Today";
  } else {
    const diffDays = Math.round(Math.abs((currentDate - targetDate) / oneDayInMilliseconds));
    if (diffDays > 1) {
      return `${diffDays} days ago`;
    } else {
      return `${diffDays} day ago`;
    }
  }
};

function JobList({ jobs }) {
  return (
    <div className="sm:px-40 px-6">
      <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">Featured job</h1>
      <div class="flex flex-col cursor-pointer w-full mb-10">
        <div class="flex w-full flex-col bg-white">
          {jobs.map((job, index) => (
            <button class=" text-left p-4 mb-4 hover:bg-gray-50" key={index}>
              <div className="flex sm:justify-between flex-col sm:flex-row">
                <div className="mb-4">
                  <div className="mb-2">{job.title}</div>
                  <div class="mb-2 text-md truncate w-full normal-case font-normal -mt-1 text-gray-500">
                    {job.company}
                  </div>
                  <div class="text-sm truncate w-full -mt-1 text-green-500 font-bold">
                    {job.type}
                  </div>
                </div>
                <div>
                  <div class="mb-2 text-md truncate w-full normal-case font-normal -mt-1 text-gray-500">
                    {job.location}
                  </div>
                  <div class="text-sm truncate w-full normal-case font-normal -mt-1 text-gray-500">
                    {onPassedDays(job.created_at)}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobList;

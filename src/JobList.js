import React from "react";

function JobList({ jobs }) {
  console.log(jobs);
  return (
    <div className="sm:px-40 px-6">
      <div class="shadow bg-white rounded flex flex-col cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100 mb-10">
            <div class="flex w-full p-2 pl-2 border-transparent border-l-2 hover:border-teal-100 flex-col">
                {jobs.map((job, index) => (
                <button class="text-left mx-2 mt-4 mb-8" key={index}>
                  {job.title}
                  <div class="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                  {job.company}
                  </div>
                </button>
                ))}
            </div>
      </div>
    </div>
  );
}

export default JobList;

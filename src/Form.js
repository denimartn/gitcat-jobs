import React, { useState } from "react";

function Form(props) {
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");
  const [isFullTime, setIsFullTime] = useState("");

  const handleJobChange = (event) => {
    setJob(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFullTime = () => {
    setIsFullTime(!isFullTime);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ job, location, isFullTime });
  };

  return (
    <form className="sm:px-60 my-16" onSubmit={handleSubmit}>
      <div className="flex sm:flex-row flex-col w-full">
        <div className="sm:mr-6 px-6 sm:px-0 w-full">
          <label className="text-sm font-bold text-gray-900 tracking-tight">
            Job description
          </label>
          <input
            type="text"
            className="w-full mt-1 px-1 py-1 border rounded focus:outline-none focus:shadow-outline focus:border-blue-400"
            onChange={handleJobChange}
            name="job"
            placeholder="JavaScript, Python, Ruby..."
          />
        </div>
        <div className="sm:mr-6 px-6 sm:px-0 w-full">
          <label className="text-sm font-bold text-gray-900 tracking-tight">
            Location
          </label>
          <input
            type="text"
            className="w-full mt-1 px-1 py-1 border rounded focus:outline-none focus:shadow-outline focus:border-blue-400"
            onChange={handleLocationChange}
            name="location"
            placeholder="New York, Canada..."
          />
        </div>

        <div className="flex sm:items-end flex-col sm:flex-row px-6 sm:px-0 w-full justify-between">
          <div className="sm:mr-4 sm:ml-4 mb-6 mt-6 sm:mt-0 sm:mb-0 flex items-center">
            <span className="text-sm font-bold text-gray-900 tracking-tight mr-2">
              Full time only
            </span>
            <input
              type="checkbox"
              className="border border-gray-300 rounded-md checked:bg-indigo-600 checked:border-transparent focus:outline-none"
              onClick={handleFullTime}
            />
          </div>
          <button
            type="submit"
            className="py-2 px-2 rounded-md font-bold leading-5 text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;

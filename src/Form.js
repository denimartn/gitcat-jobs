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
        <div className="sm:mr-6 px-6 sm:px-0 w-full mb-2">
          <label className="text-lg font-bold text-gray-900 tracking-tight">
            Job description
          </label>
          <input
            type="text"
            className="w-full mt-1 p-2  rounded focus:outline-none focus:border-green-500 border-gray-300 focus:ring-green-500 outline-none"
            onChange={handleJobChange}
            name="job"
            placeholder="JavaScript, Python, Ruby..."
          />
        </div>
        <div className="sm:mr-6 px-6 sm:px-0 w-full">
          <label className="text-lg font-bold text-gray-900 tracking-tight">
            Location
          </label>
          <input
            type="text"
            className="w-full mt-1 p-2 rounded focus:border-green-500 focus:ring-green-500 outline-none border-gray-300"
            onChange={handleLocationChange}
            name="location"
            placeholder="New York, Canada..."
          />
        </div>

        <div className="flex sm:items-end flex-col sm:flex-row px-6 sm:px-0 w-full justify-between">
          <div className="sm:mr-4 sm:ml-4 mb-6 mt-6 sm:mt-0 sm:mb-0 flex items-center">
            <span className="text-lg font-bold text-gray-900 tracking-tight mr-2">
              Full time only
            </span>
            <input
              type="checkbox"
              className="h-5 w-5 cursor-pointer text-green-500 rounded focus:ring-green-500 border-gray-300"
              onClick={handleFullTime}
            />
          </div>
          <button
            type="submit"
            className="text-lg p-2.5 rounded-md font-bold leading-5 text-white bg-green-500 shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green active:bg-green-500"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;

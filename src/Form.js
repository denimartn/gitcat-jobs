import React from "react";

function Form() {
  return (
    <form className="sm:px-40 my-16">
      <div className="flex sm:flex-row flex-col w-full">
        <div className="sm:mr-6 px-6 sm:px-0">
          <label className="text-sm font-bold text-gray-900 tracking-tight">
            Job description
          </label>
          <input className="w-full mt-1 px-1 py-1 border rounded focus:outline-none focus:shadow-outline focus:border-blue-400" />
        </div>
        <div className="sm:mr-6 px-6 sm:px-0">
          <label className="text-sm font-bold text-gray-900 tracking-tight">Location</label>
          <input className="w-full mt-1 px-1 py-1 border rounded focus:outline-none focus:shadow-outline focus:border-blue-400 " />
        </div>

        <div className="flex sm:items-end flex-col sm:flex-row px-6 sm:px-0 w-full">
          <div className="sm:mr-4 sm:ml-4 mb-6 mt-6 sm:mt-0 sm:mb-0 flex items-center">
            <span class="text-sm font-bold text-gray-900 tracking-tight mr-2 cursor-pointer">
              Full time only
            </span>
            <input
              type="checkbox"
              className="border border-gray-300 rounded-md checked:bg-indigo-600 checked:border-transparent focus:outline-none"
            />
          </div>
          <button className="py-2 px-2  rounded-md font-bold leading-5 text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600   ">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;

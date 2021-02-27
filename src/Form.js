import React from "react";

function Form() {
  return (
    <div className="px-32">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-6 ">
        <div>
          <form>
            <div className="flex justify-between">
              <div className="flex flex-row">
                <div className="mr-6">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Job description
                  </label>
                  <input className="mt-1 px-1 py-1 border rounded focus:outline-none focus:shadow-outline focus:border-blue-400" />
                </div>
                <div className="">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Location
                  </label>
                  <input className="mt-1 px-1 py-1 border rounded focus:outline-none focus:shadow-outline focus:border-blue-400 " />
                </div>

                <div className="flex items-end ">
                  <div className='mr-4 ml-4 flex items-center '>
                  <span class="text-sm font-medium leading-5 text-gray-700 mr-2 cursor-pointer">Full time only</span>
                  <input
                    type="checkbox"
                    className="form-tick  h-4 w-4 border border-gray-300 rounded-md checked:bg-indigo-600 checked:border-transparent focus:outline-none"
                  />
                  </div>
                  <button className="py-2 px-2  rounded-md font-medium leading-5 text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600   ">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

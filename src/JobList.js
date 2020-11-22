import React from "react";
import "./tailwind.output.css";

function JobList() {
    return(
        <div className="px-32">
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-6 "'>

                <div class="font-sans flex items-center justify-center bg-blue-darker w-full py-8">
                <div class="overflow-hidden bg-white rounded w-full shadow-lg  leading-normal">
                <div className="block group hover:bg-blue p-4 border-b">
                        <p class="font-bold text-lg mb-1 text-black group-hover:text-white">Create from scratch</p>
                        <p class="text-grey-darker mb-2 group-hover:text-white">Create a repository without any source code</p>
                        </div>
                        <div className="block group hover:bg-blue p-4 border-b">
                        <p class="font-bold text-lg mb-1 text-black group-hover:text-white">Create from scratch</p>
                        <p class="text-grey-darker mb-2 group-hover:text-white">Create a repository without any source code</p>
                        </div>
                </div>


                </div>
            </div>
        </div>
    )
}

export default JobList;
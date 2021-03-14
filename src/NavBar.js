import React from "react";
function NavBar() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: "#24292e" }}
    >
      <div className="sm:px-60 flex items-center">
        <img className="w-14 p-2 mr-4" src={process.env.PUBLIC_URL + "/assets/illustration/logo.png"} alt="gitcat logo" />
       <div className="text-md text-purple-100 font-extrabold font-inter">GitCat Jobs</div> 
      </div>
    </div>
  );
}

export default NavBar;

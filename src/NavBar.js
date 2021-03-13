import React from "react";
function NavBar() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: "#24292e" }}
    >
      <div className="sm:px-60 flex items-center">
        <img className="w-14 p-2 mr-4" src="/assets/illustration/logo.png" alt="github logo" />
       <div className="text-xl sm:text-2xl text-purple-100 font-semibold">Amazing jobs listing</div> 
      </div>
    </div>
  );
}

export default NavBar;

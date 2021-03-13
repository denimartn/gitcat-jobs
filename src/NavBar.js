import React from "react";
function NavBar() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: "#24292e" }}
    >
      <div className="sm:px-60 flex items-center">
        <img className="w-14 p-2 mr-4" src="assets/illustration/logo.png" alt="gitcat logo" />
       <div className="text-md text-purple-100 font-extrabold">Gitcat Job</div> 
      </div>
    </div>
  );
}

export default NavBar;

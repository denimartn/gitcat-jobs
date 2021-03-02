import React from "react";
function NavBar() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: "#24292e" }}
    >
      <div className="sm:px-40">
        <img className="w-20 p-3" src="/assets/logo.png" alt="github logo" />
      </div>
    </div>
  );
}

export default NavBar;

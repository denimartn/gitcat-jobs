import React from "react";
function NavBar() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: "#24292e" }}
    >
      <div className="sm:px-60">
        <img className="w-14 p-2" src="/assets/logo.png" alt="github logo" />
      </div>
    </div>
  );
}

export default NavBar;

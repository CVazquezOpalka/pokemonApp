import React from "react";
import img from "../../img/logo.png"

const Navbar = () => {
  return (
    <nav>
      <div />
      <div>
        <img src={img} alt="logo" className="navbar-image" />
      </div>
      <div />
    </nav>
  );
};

export default Navbar;

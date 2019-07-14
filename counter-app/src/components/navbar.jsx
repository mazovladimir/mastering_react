import React from "react";

const navBar = ({ totalCounters }) => {
  return (
    <nav className="navber navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default navBar;

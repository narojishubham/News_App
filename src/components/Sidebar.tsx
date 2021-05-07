import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="slideBar ">
      <div className="home menu-border">
        <Link to="/" id="home1">
          Home
        </Link>
      </div>

      <div className="headline menu-border">
        <Link to="/headlines" id="headline">
          Headlines
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

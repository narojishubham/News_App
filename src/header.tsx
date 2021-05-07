import React from "react";
import Search from "./components/Search";
import "./header.css";

const Header = () => {
  return (
    <div className="navigatonaBar">
      <div className="news">
        <h3>News</h3>
      </div>

      <Search />
      <h3 className="contact">User</h3>
    </div>
  );
};
export default Header;

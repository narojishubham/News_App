import React from "react";
import "./header.css";
type HeaderProps = {
  appName: string;
};
const Header = (props: HeaderProps) => {
  return (
    <div className="navigationBar">
      {/* <div className="logo"> */}
      <div className="new">
        <h5>News</h5>
        {/* </div> */}
      </div>
      <div>Contact</div>
      <div className="menu"></div>
    </div>
  );
};
export default Header;

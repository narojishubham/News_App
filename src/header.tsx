import React from "react";
// import "./header.css";
import "./App.css";
// type HeaderProps = {
//   appName: string;
// };
const Header = () => {
  return (
    <div
      className="navigationBar"
      style={{
        width: "100%",
        height: "50px",
        background: "grey",
        display: "flex",
        // justifyContent: "space-between",
      }}
    >
      <div className="new">
        <h3
          style={{
            paddingLeft: "35px",
            paddingBottom: "150px",
            color: "white",
          }}
        >
          News
        </h3>
      </div>

      <h3 style={{ position: "relative", left: "89%", color: "white" }}>
        Contact
      </h3>
    </div>
  );
};
export default Header;

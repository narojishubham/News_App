import React from "react";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div>
        <Link to="/">home</Link>
      </div>

      <div>
        <Link to="/headlines">headlines</Link>
      </div>
    </div>
  );
}

export default Sidebar;

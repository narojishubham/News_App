import React from "react";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Header from "./header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header appName="News App" />
        <div className="container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="news">
            <Switch>
              <Route exact path="/">
                home
              </Route>
              <Route exact path="/headlines">
                headline
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Headline from "./components/Headline";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="news">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/headlines">
                <Headline />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

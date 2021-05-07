import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Headline from "./components/Headline";
// import SearchPage from "./components/SearchPage";
import { SearchedUsers } from "./context/Context";

function App() {
  const [search, setSearch] = useState<any>([]);
  return (
    <BrowserRouter>
      <div>
        <SearchedUsers.Provider value={{ search, setSearch }}>
          <Header />
          <div className="container">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="news">
              <div>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/headlines">
                    <Headline />
                  </Route>
                  <Route exact path="/search?keyWord=searchWord">
                    {/* <SearchPage /> */}
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </SearchedUsers.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;

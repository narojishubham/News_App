import React, { useState, useContext } from "react";
import "./Search.css";
import { useHistory } from "react-router-dom";
import { SearchedUsers } from "../context/Context";

const Search = () => {
  // const [search, setSearch] = useState<any>([]);
  const { setSearch } = useContext(SearchedUsers);
  const [result, setresult] = useState<string>("");
  const chnageEventHandler = (e: any) => {
    // console.log(e.target.value);
    // setSearch(e.target.value);
    // fetch(
    //   `https://newsapi.org/v2/everything?qInTitle=${e.target.value}&from=2021-04-30&sortBy=popularity&apiKey=42c5b72f1c954074a6f330736df73167`
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     // console.log(json);
    //     setSearch([json.articles]);
    //     // console.log(json.articles);
    //   });
    setresult(e.target.value);
  };
  const searchArtical = () => {
    fetch(
      `https://newsapi.org/v2/everything?qInTitle=${result}&from=2021-04-30&sortBy=popularity&apiKey=42c5b72f1c954074a6f330736df73167`
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setSearch(json.articles);
        // console.log(json.articles);
      });
  };

  return (
    <div className="new">
      <div className="search">
        <input
          type="text"
          placeholder="search"
          onChange={chnageEventHandler}
        ></input>
      </div>
      <div className="searchButton">
        <button onClick={searchArtical}>Search</button>
      </div>
    </div>
  );
};

export default Search;

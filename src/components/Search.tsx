import React, { useState, useContext } from "react";
import "./Search.css";
import { SearchedUsers } from "../context/Context";

const Search = () => {
  const { setSearch } = useContext(SearchedUsers);
  const [result, setresult] = useState<string>("");
  const changeEventHandler = (e: any) => {
    setresult(e.target.value);
  };
  const enable = result.length >= 1;
  // const [enable, setEnable] = useState(false);
  // if (result.length >= 1) {
  //   setEnable(true);
  // } else {
  //   setEnable(false);
  // }
  const searchArtical = () => {
    fetch(
      `https://newsapi.org/v2/everything?qInTitle=${result}&from=2021-04-30&sortBy=popularity&apiKey=42c5b72f1c954074a6f330736df73167`
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setSearch(json.articles);
        console.log(json.articles);
      });
  };
  return (
    <div className="new">
      <div className="search">
        <input
          type="text"
          placeholder="search"
          onChange={changeEventHandler}
        ></input>
      </div>
      <div className="searchButton">
        <button disabled={!enable} onClick={searchArtical}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;

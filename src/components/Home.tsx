import React, { useState, useEffect, useContext } from "react";
import { SearchedUsers } from "../context/Context";
import "./Home.css";
import HomeCards from "./HomeCards";
import Loader from "react-loader-spinner";

const Home = () => {
  const { search } = useContext(SearchedUsers);
  // console.log(search, "testing search");
  const [articles, setArticles] = useState<any>([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setArticles(search);
  }, [search]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=42c5b72f1c954074a6f330736df73167"
    )
      .then((response) => response.json())
      .then((json) => {
        setArticles([...json.articles]);
        // console.log(json.articles);
        setLoader(true);
      });
  }, []);

  return (
    <div className="home">
      <div>
        <h2>Today's News</h2>
      </div>
      <div>
        {loader ? (
          <div>
            {articles.length !== 0 ? (
              <div>
                {articles.map((article: any) => {
                  return <HomeCards article={article} />;
                })}
              </div>
            ) : (
              <div>Please enter valid input</div>
            )}
          </div>
        ) : (
          <div className="home-loader">
            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;

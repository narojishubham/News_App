import React, { useState, useEffect, useContext } from "react";
import { SearchedUsers } from "../context/Context";
import "./Home.css";
import HomeCards from "./HomeCards";

const Home = () => {
  const { search } = useContext(SearchedUsers);
  console.log(search, "testing search");
  const [articles, setArticles] = useState<any>([]);
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
      });
  }, []);

  return (
    <div className="home">
      <div>
        <h2>Today's News</h2>
      </div>
      <div>
        {articles.map((article: any) => {
          // console.log(article);
          return <HomeCards article={article} />;
        })}
      </div>
    </div>
  );
};
export default Home;

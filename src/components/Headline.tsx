import React, { useEffect, useState } from "react";
import "./Headline.css";
import HeadlineCard from "./HeadlineCard";

const Headline = () => {
  const [articles, setArticles] = useState<any>([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-04-30&sortBy=popularity&apiKey=42c5b72f1c954074a6f330736df73167"
    )
      .then((response) => response.json())
      .then((json) => {
        setArticles([...json.articles]);
        // console.log(json.articles);
      });
  }, []);

  return (
    <div className="row">
      <div>
        <h2>Headlines</h2>
      </div>
      <div>
        {articles.map((article: any) => {
          console.log(article);
          return <HeadlineCard article={article} />;
        })}
      </div>
    </div>
  );
};
export default Headline;

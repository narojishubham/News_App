import React, { useEffect, useState } from "react";
import "./Headline.css";

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
      <h2>Top Headlines</h2>

      <div className="column">
        {articles.map((article: any) => {
          console.log(article);
          return (
            <div className="card">
              <div>
                <img src={article.urlToImage} className="news-image" />
              </div>
              <div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p>{article.url}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Headline;

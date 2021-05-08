import { axiosCall } from "../services/hedlineservice";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Headline.css";
import HeadlineCard from "./HeadlineCard";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Headline = () => {
  const [articles, setArticles] = useState<any>([]);
  const [loader, setLoader] = useState(false);

  // axios
  //   .get(
  //     "https://newsapi.org/v2/everything?q=Apple&from=2021-04-30&sortBy=popularity&apiKey=42c5b72f1c954074a6f330736df73167"
  //   )
  //   .then(function (response) {
  //     setArticles(response.data.article);
  //   })
  //   .catch(function (error) {
  //     console.log(error, "erroe");
  //   });
  // useEffect(() => {
  //   // AxiosCall();
  //   Headline();
  // }, []);
  useEffect(() => {
    axiosCall().then((res) => {
      console.log(res.data.articles);
      setArticles([...res.data.articles]);
      setLoader(true);
    });

    // axiosCall().then((res: any) => {
    //   console.log(res);
    // });
    // fetch(
    //   "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=42c5b72f1c954074a6f330736df73167"
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setArticles([...json.articles]);
    //     console.log(json.articles);
    //   });
  }, []);
  return (
    <div className="row">
      <div>
        <h2>Headlines</h2>
      </div>
      <div>
        {loader ? (
          <div>
            {articles.map((article: any) => {
              console.log(article);
              return <HeadlineCard article={article} />;
            })}
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

export default Headline;

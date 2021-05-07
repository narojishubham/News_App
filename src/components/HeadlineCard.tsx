import React from "react";
type HeadlineCardProps = {
  article: any;
};
const HeadlineCard = ({ article }: HeadlineCardProps) => {
  return (
    // <div className="card">
    //   <div className="img-backGround">
    //     <img src={article.urlToImage} className="news-image" />
    //   </div>
    //   <div>
    //     <h3 id="headlineData">{article.title}</h3>
    //     <p id="headlineData">{article.description}</p>
    //     {/* <p id="headlineData">{article.url}</p> */}
    //     <a className="headlineUrl" href={article.url} target="_blank">
    //       View Full Coverage
    //     </a>
    //   </div>
    // </div>
    <div className="headlineCard">
      {/* ------- text ------- */}
      <div className="headlineCard-text">
        <h3 id="headlineData">{article.title}</h3>
        <p id="headlineData">{article.description}</p>
        <a className="headlineUrl" href={article.url} target="_blank">
          View Full Coverage
        </a>
      </div>
      {/* ------- image ------- */}
      <div className="headlineCard-image">
        <img src={article.urlToImage} className="headlineImage" />
      </div>
    </div>
  );
};

export default HeadlineCard;

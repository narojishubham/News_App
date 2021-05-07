type HomeCardsProps = {
  article: any;
};
const HomeCards = ({ article }: HomeCardsProps) => {
  return (
    // <div className="homeCard">
    //   <div className="header">
    //     {/* <div> */}
    //     <img src={article.urlToImage} className="news-image" />
    //     {/* </div> */}
    //     <p>{article.title}</p>
    //   </div>
    //   <div className="container">
    //     <p>{article.description}</p>
    //     <p>{article.url}</p>
    //   </div>
    // </div>
    <div className="homeCard">
      {/* ------- text ------- */}
      <div className="homeCard-text">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a className="homeUrl" href={article.url} target="_blank">
          View Full Coverage
        </a>
      </div>
      {/* ------- image ------- */}
      <div className="homeCard-image">
        <img src={article.urlToImage} className="homeImage" />
      </div>
    </div>
  );
};

export default HomeCards;

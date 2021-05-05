import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="headlines">
        <h2>Today's News</h2>
      </div>
      <div className="card">
        <div className="header">
          <p>The Header</p>
        </div>
        <div className="container">
          <p>Some random texts</p>
        </div>
      </div>
      <div className="card">
        <div className="header">
          <p>The Header</p>
        </div>
        <div className="container">
          <p>Some random texts </p>
        </div>
      </div>
    </div>
  );
};
export default Home;

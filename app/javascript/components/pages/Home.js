import React from "react";
import { Button } from "reactstrap";

const Home = (props) => {
  const { logged_in } = props;

  if (logged_in) {
    return (
      <div className="home">
        <div className="button-container">
          <Button className="button1">
            <a href="/competitive">Competitive</a>
          </Button>
          <br />
          <Button className="button2">
            <a href="/leaderboard">Leaderboard</a>
          </Button>
        </div>
        <h6 className="description">
          Welcome to Flavian Fairway. Keep track of your statistics and be
          pitted against other users in competitive style for whatever it is you
          do! Snowboarding, basketball, chess, you name it! Check out the
          leaderboard and see if you can make your mark, player!
        </h6>
      </div>
    );
  } else {
    return (
      <div>
        <div className="home">
          <div>
            <Button className="button3">
              <a href="/leaderboard">Leaderboard</a>
            </Button>
          </div>
          <h6 className="description">
            Welcome to Flavian Fairway. Keep track of your statistics and be
            pitted against other users in competitive style for whatever it is
            you do! Snowboarding, basketball, chess, you name it! Check out the
            leaderboard and see if you can make your mark, player!
          </h6>
        </div>
      </div>
    );
  }
};

export default Home;

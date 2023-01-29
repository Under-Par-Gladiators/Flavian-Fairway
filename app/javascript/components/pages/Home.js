import React from "react";
import { Button } from "reactstrap";

const Home = (props) => {
  const { logged_in } = props;

  if (logged_in) {
    return (
      <div className="home">
        <Button>
          <a href="/competitive">Competitive</a>
        </Button>
        <br />
        <Button>
          <a href="/leaderboard">Leaderboard</a>
        </Button>
        <h6>
          Welcome to Flavian Fairway. Keep track of your statistics and be
          pitted against other users in competitive style for whatever it is you
          do! Snowboarding, basketball, chess, you name it! Check out the
          leaderboard and see if you can make your mark, player!
        </h6>
      </div>
    );
  } else {
    return (
      <div className="home">
        <Button>
          <a href="/leaderboard">Leaderboard</a>
        </Button>
        <h6>
          Welcome to Flavian Fairway. Keep track of your statistics and be
          pitted against other users in competitive style for whatever it is you
          do! Snowboarding, basketball, chess, you name it! Check out the
          leaderboard and see if you can make your mark, player!
        </h6>
      </div>
    );
  }
};

export default Home;

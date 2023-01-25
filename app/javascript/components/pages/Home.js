import React from "react";
import { Button } from "reactstrap";

const Home = (props) => {
  const { logged_in } = props;

  if (logged_in) {
    return (
      <>
        <h1>Home Page</h1>
        <Button>
          <a href="/competitive">Competitive</a>
        </Button>
        <Button>
          <a href="/leaderboard">Leaderboard</a>
        </Button>
        <h6>
          Descriptive text about us and our app, what you can find on our page,
          and much more! Lorem ipsum a buncha filler text just tryna give this
          thing a bit more substance
        </h6>
      </>
    );
  } else {
    return (
      <>
        <h1>Home Page</h1>
        <Button>
          <a href="/leaderboard">Leaderboard</a>
        </Button>
        <h6>
          Descriptive text about us and our app, what you can find on our page,
          and much more! Lorem ipsum a buncha filler text just tryna give this
          thing a bit more substance
        </h6>
      </>
    );
  }
};

export default Home;

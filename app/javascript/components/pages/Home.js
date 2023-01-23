import React from "react";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Button>
        <a href="/leaderboard">Leaderboard</a>
      </Button>
      <Button>
        <a href="/competitive">Competitive</a>
      </Button>
      <h6>
        Descriptive text about us and our app, what you can find on our page,
        and much more! Lorem ipsum a buncha filler text just tryna give this
        thing a bit more substance
      </h6>
    </div>
  );
};

export default Home;

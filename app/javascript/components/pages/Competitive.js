import React, { useState, useEffect } from "react";
import { Card, CardHeader, ListGroup, ListGroupItem } from "reactstrap";

const Competitive = ({ logged_in, current_user, metrics, updateMetric }) => {
  // This defines the users metrics that will appear on the left side.
  const yourMetric = metrics?.find(
    (metric) => metric.user_id === current_user.id
  );

  // This code defines all the state dependent variables
  const [updatedMetric, setUpdatedMetric] = useState(null);
  const [randoMetrics, setRandoMetrics] = useState(null);
  const [winText, setWinText] = useState(null);
  const [counter, setCounter] = useState(0);
  const [buttonCounter, setButtonCounter] = useState(0);
  const [runText, setRunText] = useState("???");
  const [difficultyText, setDifficultyText] = useState("???");
  const [elevationText, setElevText] = useState("???");
  const [speedText, setSpeedText] = useState("???");
  const [totalrunsText, setTotalRunsText] = useState("???");

  // This code uses the showRandom model method to select a random metrics set from database.
  const showRandom = () => {
    return fetch("/random")
      .then((response) => response.json())
      .then((payload) => {
        setRandoMetrics(payload);
      })
      .catch((error) => console.log(error));
  };
  // Code below is all functions that this page will perform

  const handleClick = () => {
    difficultyLogic();
    addText();
  };

  useEffect(() => {
    if (buttonCounter === 1) {
      elevationLogic();
    } else if (buttonCounter === 2) {
      speedLogic();
    } else if (buttonCounter === 3) {
      totalRunsLogic();
    } else if (buttonCounter === 4) {
      winLogic();
    }
  }, [buttonCounter]);

  useEffect(() => {
    if (updatedMetric !== null) {
      shipUpdate();
    }
  }, [updatedMetric]);

  const difficultyLogic = () => {
    if (yourMetric.run_difficulty > randoMetrics.run_difficulty) {
      counterPlus();
      buttonCounterPlus();
    } else {
      counterMinus();
      buttonCounterPlus();
    }
  };
  const elevationLogic = () => {
    if (yourMetric.elevation_change > randoMetrics.elevation_change) {
      counterPlus();
      buttonCounterPlus();
    } else {
      counterMinus();
      buttonCounterPlus();
    }
  };
  const speedLogic = () => {
    if (yourMetric.average_speed > randoMetrics.average_speed) {
      counterPlus();
      buttonCounterPlus();
    } else {
      counterMinus();
      buttonCounterPlus();
    }
  };
  const totalRunsLogic = () => {
    if (yourMetric.number_of_runs > randoMetrics.number_of_runs) {
      counterPlus();
      buttonCounterPlus();
    } else {
      counterMinus();
      buttonCounterPlus();
    }
  };

  const winLogic = () => {
    if (counter > 0) {
      setWinText("Victory! +1 Win");
      prepUpdate();
      buttonCounterPlus();
    } else {
      setWinText("Defeat, try again tomorrow");
    }
  };

  const prepUpdate = () => {
    setUpdatedMetric({
      location: yourMetric.location,
      name_of_run: yourMetric.name_of_run,
      run_difficulty: yourMetric.run_difficulty,
      elevation_change: yourMetric.elevation_change,
      average_speed: yourMetric.average_speed,
      number_of_runs: yourMetric.number_of_runs,
      comment: yourMetric.comment,
      wins: yourMetric.wins + 1,
      user_id: yourMetric.user_id,
    });
  };
  const shipUpdate = () => {
    updateMetric(updatedMetric, yourMetric.id);
  };

  const addText = () => {
    setRunText(randoMetrics.name_of_run);
    setDifficultyText(randoMetrics.run_difficulty);
    setElevText(randoMetrics.elevation_change);
    setSpeedText(randoMetrics.average_speed);
    setTotalRunsText(randoMetrics.number_of_runs);
  };

  const counterPlus = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const counterMinus = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  const buttonCounterPlus = () => {
    setButtonCounter(buttonCounter + 1);
  };

  // everything below is what will be displayed for user.

  if (logged_in === true) {
    return (
      <div className="competitive-page">
        <div>
          <h1 className="mettle">Test Your Mettle!</h1>
          <p className="compete-sentence">
            Ready to see how you stack up to your peers? Simply click the
            compete button to compare against another shredder. If you got the
            better numbers, you earn a win. Win enough, and maybe you end up on
            the leaderboards for some bragging rights
          </p>
          <h1 className="win-text">{winText}</h1>
        </div>
        <div className="cardLine">
          {yourMetric && (
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardHeader>{current_user.username}</CardHeader>
              <ListGroup flush>
                <ListGroupItem>Location: {yourMetric.location}</ListGroupItem>
                <ListGroupItem>Run: {yourMetric.name_of_run}</ListGroupItem>
                <ListGroupItem>
                  Difficulty: {yourMetric.run_difficulty}
                </ListGroupItem>
                <ListGroupItem>
                  Elevation Change: {yourMetric.elevation_change}
                </ListGroupItem>
                <ListGroupItem>
                  Average Speed: {yourMetric.average_speed}
                </ListGroupItem>
                <ListGroupItem>
                  Total Runs: {yourMetric.number_of_runs}
                </ListGroupItem>
                <ListGroupItem>Smack Talk: {yourMetric.comment}</ListGroupItem>
              </ListGroup>
            </Card>
          )}
          <div className="battleButtons">
            <button
              onClick={showRandom}
              disabled={randoMetrics !== null}
              className="opponent-button"
            >
              Find Opponent
            </button>
            <button
              onClick={handleClick}
              disabled={randoMetrics === null || buttonCounter !== 0}
            >
              Compete!
            </button>
          </div>
          {randoMetrics && (
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardHeader>Opponent</CardHeader>
              <ListGroup flush>
                <ListGroupItem>Location: {randoMetrics.location}</ListGroupItem>
                <ListGroupItem>Run: {runText}</ListGroupItem>
                <ListGroupItem>Difficulty: {difficultyText}</ListGroupItem>
                <ListGroupItem>Elevation Change: {elevationText}</ListGroupItem>
                <ListGroupItem>Average Speed: {speedText}</ListGroupItem>
                <ListGroupItem>Total Runs: {totalrunsText}</ListGroupItem>
                <ListGroupItem>
                  Smack Talk: {randoMetrics.comment}
                </ListGroupItem>
              </ListGroup>
            </Card>
          )}
        </div>
      </div>
    );
  } else {
    return <h1>Must be logged in to access competition</h1>;
  }
};

export default Competitive;

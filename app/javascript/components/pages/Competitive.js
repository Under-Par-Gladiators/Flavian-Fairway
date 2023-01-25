import React, { useState, useEffect } from "react";
import { Card, CardHeader, ListGroup, ListGroupItem } from "reactstrap";

const Competitive = ({logged_in, current_user, metrics}) => {
  // This defines the users metrics that will appear on the left side.
  const yourMetric = metrics?.find(
    (metric) => metric.user_id === current_user.id
  );

  // This code defines all the state dependent variables
  const [updateMetric, setUpdateMetric] = useState(yourMetric)
  const [randoMetrics, setRandoMetrics] = useState(null)
  const [winText, setWinText] = useState(null)
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  // This code uses the showRandom model method to select a random metrics set from database.
  const showRandom = () => {
    fetch("/random")
      .then((response) => response.json())
      .then((payload) => {
        setRandoMetrics(payload);
      })
      .catch((error) => console.log(error));
  };

  // Code below is all functions that this page will perform
  async function handleClick () {
     await showRandom();
     difficultyLogic(yourMetric.run_difficulty, randoMetrics.run_difficulty);
     elevationLogic(yourMetric.elevation_change, randoMetrics.elevation_change);
     speedLogic(yourMetric.average_speed, randoMetrics.average_speed);
     numberLogic(yourMetric.number_of_runs, randoMetrics.number_of_runs);

     console.log(counter1);
     console.log(counter2)
  }

  const difficultyLogic = (a, b) => {
      if (a > b) {
      return setCounter1(counter1 + 1)
    } else {
      return setCounter2(counter2 + 1)
    }
  }
  const elevationLogic = (a, b) => {
    if (a > b) {
      setCounter1(counter1 + 1)
    } else {
      setCounter2(counter2 + 1)
    }
  }
  const speedLogic = (a ,b) => {
    if (a > b) {
      setCounter1(counter1 + 1)
    } else {
      setCounter2(counter2 + 1)
    }
  }
  const numberLogic = (a, b) => {
    if (a > b) {
      setCounter1(counter1 + 1)
    } else {
      setCounter2(counter2 + 1)
    }
  }

  const winner = () => {}

  // everything below is what will be displayed for user.

  if (logged_in === true) {return (
    <>
    <div className="competeText">
      <h1>Test your mettle!</h1>
      <br/>
      <p>Ready to see how you stack up to your peers? Simply click the compete button to compare against another shredder. If you got the better numbers, you earn a win. Win enough, and maybe you end up on the leaderboards for some bragging rights</p>
      <br/>
      <h1>{winText}</h1>
    </div>
    <div className='cardLine'>
      {yourMetric && (
        <Card
        style={{
          width: '18rem'
        }}
      >
        <CardHeader>
          {current_user.username}
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem>
            Location:{yourMetric.location}
          </ListGroupItem>
          <ListGroupItem>
            Run:{yourMetric.name_of_run}
          </ListGroupItem>
          <ListGroupItem className="difficultyColor">
            Difficulty:{yourMetric.run_difficulty}
          </ListGroupItem>
          <ListGroupItem className="elevationColor">
            Elevation change:{yourMetric.elevation_change}
          </ListGroupItem>
          <ListGroupItem className="speedColor">
            Avg speed:{yourMetric.average_speed}
          </ListGroupItem>
          <ListGroupItem className="numberColor">
            Total runs:{yourMetric.number_of_runs}
          </ListGroupItem>
          <ListGroupItem>
            Smack talk:{yourMetric.comment}
          </ListGroupItem>
        </ListGroup>
      </Card>
      )}
      <button onClick={handleClick}>Compete!</button>
      {randoMetrics && (
        <Card
        style={{
          width: '18rem'
        }}
      >
        <CardHeader>
          {current_user.username}
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem>
            Location:{randoMetrics.location}
          </ListGroupItem>
          <ListGroupItem>
            Run:{randoMetrics.name_of_run}
          </ListGroupItem>
          <ListGroupItem>
            Difficulty:{randoMetrics.run_difficulty}
          </ListGroupItem>
          <ListGroupItem>
            Elevation change:{randoMetrics.elevation_change}
          </ListGroupItem>
          <ListGroupItem>
            Avg speed:{randoMetrics.average_speed}
          </ListGroupItem>
          <ListGroupItem>
            Total runs:{randoMetrics.number_of_runs}
          </ListGroupItem>
          <ListGroupItem>
            Smack talk:{randoMetrics.comment}
          </ListGroupItem>
        </ListGroup>
      </Card>
      )}

      </div>
    </>
  )}
  else {return (
    <h1>Must be logged in to access competition</h1>
  )}
};

export default Competitive;

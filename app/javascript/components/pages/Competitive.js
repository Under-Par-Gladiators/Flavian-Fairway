import React, { useState } from "react";
import { Card, CardHeader, ListGroup, ListGroupItem, Button } from "reactstrap";

const Competitive = ({logged_in, current_user, metrics}) => {
  const yourMetric = metrics?.find(
    (metric) => metric.user_id === current_user.id
  );
  const [randoMetrics, setRandoMetrics] = useState(null)
  const showRandom = () => {
    fetch("/random")
      .then((response) => response.json())
      .then((payload) => {
        setRandoMetrics(payload);
      })
      .catch((error) => console.log(error));
  };
  console.log(randoMetrics)
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  if (logged_in === true) {return (
    <>
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
            {yourMetric.location}
          </ListGroupItem>
          <ListGroupItem>
            {yourMetric.name_of_run}
          </ListGroupItem>
          <ListGroupItem>
            {yourMetric.run_difficulty}
          </ListGroupItem>
          <ListGroupItem>
            {yourMetric.elevation_change}
          </ListGroupItem>
          <ListGroupItem>
            {yourMetric.average_speed}
          </ListGroupItem>
          <ListGroupItem>
            {yourMetric.number_of_runs}
          </ListGroupItem>
          <ListGroupItem>
            {yourMetric.comment}
          </ListGroupItem>
        </ListGroup>
        <Button onClick={showRandom}>TO BATTLE</Button>
      </Card>
      )}
      <button onClick={showRandom}>Compete!</button>
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
            {randoMetrics.location}
          </ListGroupItem>
          <ListGroupItem>
            {randoMetrics.name_of_run}
          </ListGroupItem>
          <ListGroupItem>
            {randoMetrics.run_difficulty}
          </ListGroupItem>
          <ListGroupItem>
            {randoMetrics.elevation_change}
          </ListGroupItem>
          <ListGroupItem>
            {randoMetrics.average_speed}
          </ListGroupItem>
          <ListGroupItem>
            {randoMetrics.number_of_runs}
          </ListGroupItem>
          <ListGroupItem>
            {randoMetrics.comment}
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

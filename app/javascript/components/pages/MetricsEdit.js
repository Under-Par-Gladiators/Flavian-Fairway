import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const MetricEdit = ({ metrics, updateMetric, user }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentMetric = metrics?.find(
    (metric) => metric.id === +id
  );
  const [editMetric, setEditMetric] = useState({
    location: currentMetric?.location,
    name_of_run: currentMetric?.name_of_run,
    run_difficulty: currentMetric?.run_difficulty,
    elevation_change: currentMetric?.elevation_change,
    average_speed: currentMetric?.average_speed,
    number_of_runs: currentMetric?.number_of_runs,
    comment: currentMetric?.comment,
    wins: currentMetric?.wins,
  });

  const handleChange = (e) => {
    setEditMetric({ ...editMetric, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateMetric(editMetric, currentMetric.id);
    navigate(`/metricsshow/${currentMetric.id}`);
  };

  return (
    <div>
      <h1>Edit Metrics</h1>
      <Form>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input
            name="location"
            onChange={handleChange}
            placeholder="What is your new metrics?"
            type="text"
            value={editMetric?.location}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name_of_run">Name of Run</Label>
          <Input
            name="name_of_run"
            onChange={handleChange}
            placeholder="What is your name of run?"
            type="text"
            value={editMetric?.name_of_run}
          />
        </FormGroup>
        <FormGroup>
          <Label for="run_difficulty">Run Difficulty</Label>
          <Input
            name="run_difficulty"
            onChange={handleChange}
            placeholder="What is your run difficulty?"
            type="text"
            value={editMetric?.run_difficulty}
          />
        </FormGroup>
        <FormGroup>
          <Label for="elevation_change">Elevation Change</Label>
          <Input
            name="elevation_change"
            onChange={handleChange}
            placeholder="Who was the elevation changer?"
            type="text"
            value={editMetric?.elevation_change}
          />
        </FormGroup>
        <FormGroup>
          <Label for="average_speed">Average Speed</Label>
          <Input
            name="average_speed"
            onChange={handleChange}
            placeholder="What is your average speed?"
            type="text"
            value={editMetric?.average_speed}
          />
        </FormGroup>
        <FormGroup>
          <Label for="number_of_runs">Number of Runs</Label>
          <Input
            name="number_of_runs"
            onChange={handleChange}
            placeholder=" Number of runs?"
            type="text"
            value={editMetric?.number_of_runs}
          />
        </FormGroup>
        <FormGroup>
          <Label for="comment">Comment</Label>
          <Input
            name="comment"
            onChange={handleChange}
            placeholder="Comment Please?"
            type="number"
            value={editMetric?.comment}
          />
        </FormGroup>
        <FormGroup>
          <Label for="wins">Wins</Label>
          <Input
            name="wins"
            onChange={handleChange}
            placeholder="How many wins?"
            type="number"
            value={editMetric?.wins}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit New Metrics</Button>
      </Form>
    </div>
  );
};

export default MetricEdit;

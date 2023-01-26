import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const MetricsNew = ({ createMetric, current_user }) => {
  const navigate = useNavigate();

  const [newMetric, setNewMetric] = useState({
    location: "",
    name_of_run: "",
    run_difficulty: "",
    elevation_change: "",
    average_speed: "",
    number_of_runs: "",
    comment: "",
    wins: "0",
    user_id: current_user.id,
  });

  const handleChange = (e) => {
    setNewMetric({ ...newMetric, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createMetric(newMetric);
    navigate(`/metricsshow/${current_user.id}`);
  };

  return (
    <>
      <h1>Create Metrics</h1>
      <Form>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input
            name="location"
            onChange={handleChange}
            placeholder="Which mountain resort are you at?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="name_of_run">Name of Run</Label>
          <Input
            name="name_of_run"
            onChange={handleChange}
            placeholder="What run is this?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="run_difficulty">Run Difficulty</Label>
          <Input
            name="run_difficulty"
            onChange={handleChange}
            placeholder="1-4"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="elevation_change">Elevation Change</Label>
          <Input
            name="elevation_change"
            onChange={handleChange}
            placeholder="Difference in elevation"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="average_speed">Average Speed</Label>
          <Input
            name="average_speed"
            onChange={handleChange}
            placeholder="Average speed throughout the run"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="number_of_runs">Number of Runs</Label>
          <Input
            name="number_of_runs"
            onChange={handleChange}
            placeholder="Runs completed throughout the day"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="comment">Comment</Label>
          <Input
            name="comment"
            onChange={handleChange}
            placeholder="Comments"
            type="text"
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  );
};

export default MetricsNew;

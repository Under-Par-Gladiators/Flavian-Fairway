import React from "react";
import { Button } from "reactstrap";

const MetricsShow = () => {
  return (
    <div>
      <h1>Metrics Show</h1>
      <Button>
        <a href="/metricsedit">Edit</a>
      </Button>
      <Button>
        <a href="/metricsnew">Create</a>
      </Button>
      <Button>Delete</Button>
    </div>
  );
};

export default MetricsShow;

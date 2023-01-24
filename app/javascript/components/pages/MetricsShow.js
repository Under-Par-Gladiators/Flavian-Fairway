import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavLink,
} from "reactstrap";
import { useParams } from "react-router-dom";

const MetricsShow = ({ metrics }, args) => {
  const { id } = useParams();
  const currentMetric = metrics?.find((metric) => metric.id === +id);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <h1>Metrics Show</h1>
      <p>Location: {`${currentMetric?.location}`}</p>
      <p>Name of Run: {`${currentMetric?.name_of_run}`}</p>
      <p>Run Difficulty: {`${currentMetric?.run_difficulty}`}</p>
      <p>Elevation Change: {`${currentMetric?.elevation_change}`}</p>
      <p>Average Speed: {`${currentMetric?.average_speed}`}</p>
      <p>Number of Runs: {`${currentMetric?.number_of_runs}`}</p>
      <p>Comment: {`${currentMetric?.comment}`}</p>
      <p>Wins: {`${currentMetric?.wins}`}</p>
      <Button color="secondary">
        <a href="/metricsedit">Edit</a>
      </Button>
      <Button color="secondary">
        <a href="/metricsnew">Create</a>
      </Button>
      <div>
        <Button color="danger" onClick={toggle}>
          Delete
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Delete Metrics</ModalHeader>
          <ModalBody>
            Are you sure you want to delete your set of metrics?
          </ModalBody>
          <ModalFooter>
            <NavLink to="/metricsshow">
              <Button color="danger" onClick={toggle}>
                Delete
              </Button>{" "}
            </NavLink>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default MetricsShow;

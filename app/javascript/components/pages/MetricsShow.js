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

const MetricsShow = (
  { metrics, current_user, logged_in, deleteMetric },
  args
) => {
  const { id } = useParams();
  const currentMetric = metrics?.find(
    (metric) => metric && metric.user_id === current_user.id
  );

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  if (logged_in && !currentMetric) {
    return (
      <div className="show-page-out">
        <h3>Enter your information to get started my dude!</h3>
        <Button color="secondary">
          <a href="/metricsnew" className="create-button">Create</a>
        </Button>
      </div>
    );
  } else {
    return (
      <div className="show-page">
        {currentMetric && (
          <div className="show-container">
            <div className="metric-container">
              <h1 className="metric-title">Metrics</h1>
              <p className="metric-entries">
                Location: {currentMetric?.location}
              </p>
              <p className="metric-entries">
                Name of Run: {currentMetric?.name_of_run}
              </p>
              <p className="metric-entries">
                Run Difficulty: {currentMetric?.run_difficulty}
              </p>
              <p className="metric-entries">
                Elevation Change: {currentMetric?.elevation_change}
              </p>
              <p className="metric-entries">
                Average Speed: {currentMetric?.average_speed}
              </p>
              <p className="metric-entries">
                Number of Runs: {currentMetric?.number_of_runs}
              </p>
              <p className="metric-entries">
                Comment: {currentMetric?.comment}
              </p>
              <p className="metric-entries">Wins: {currentMetric?.wins}</p>
            </div>
            <div className="metric-buttons">
              <Button color="secondary">
                <a
                  href={`/metricsedit/${currentMetric.id}`}
                  className="edit-button"
                >
                  Edit
                </a>
              </Button>
              <div>
                <Button
                  className="delete-button"
                  color="danger"
                  onClick={toggle}
                >
                  Delete
                </Button>
                <Modal isOpen={modal} toggle={toggle} {...args}>
                  <ModalHeader toggle={toggle}>Delete Metrics</ModalHeader>
                  <ModalBody>
                    Are you sure you want to delete your set of metrics?
                  </ModalBody>
                  <ModalFooter>
                    <NavLink to={`/metricsshow/${current_user.id}`}>
                      <Button
                        color="danger"
                        onClick={() => deleteMetric(`${currentMetric.id}`)}
                      >
                        Confirm Delete
                      </Button>{" "}
                    </NavLink>
                    <Button color="secondary" onClick={toggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default MetricsShow;

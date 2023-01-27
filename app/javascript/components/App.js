import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components2/Header";
import Footer from "./components2/Footer";
import AboutUs from "./pages/AboutUs";
import Competitive from "./pages/Competitive";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import MetricsNew from "./pages/MetricsNew";
import MetricsShow from "./pages/MetricsShow";
import MetricsEdit from "./pages/MetricsEdit";
import MockMetrics from "./MockMetrics";

const App = (props) => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    readMetrics();
  }, []);

  const readMetrics = () => {
    fetch("/metrics")
      .then((response) => response.json())
      .then((payload) => {
        setMetrics(payload);
      })
      .catch((error) => console.log(error));
  };

  const createMetric = (metric) => {
    fetch("/metrics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ metric }),
    })
      .then((response) => response.json())
      .then(() => readMetrics())
      .catch((error) => console.error(error));
  };

  const updateMetric = (metric, id) => {
    fetch(`/metrics/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ metric }),
    })
      .then((response) => response.json())
      .then(() => readMetrics())
      .catch((error) => console.error(error));
  };

  const deleteMetric = (id) => {
    fetch(`/metrics/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => readMetrics())
      .catch((errors) => console.log("delete errors:", errors));
  };

  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/competitive" element={<Competitive {...props} metrics={metrics} updateMetric={updateMetric} />} />
        <Route
          path="/leaderboard"
          element={<LeaderBoard {...props} metrics={metrics} />}
        />
        <Route
          path="/metricsnew"
          element={<MetricsNew {...props} createMetric={createMetric} />}
        />
        <Route
          path="/metricsshow/:id"
          element={
            <MetricsShow
              metrics={metrics}
              {...props}
              deleteMetric={deleteMetric}
            />
          }
        />
        <Route
          path="/metricsedit/:id"
          element={
            <MetricsEdit
              {...props}
              metrics={metrics}
              updateMetric={updateMetric}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

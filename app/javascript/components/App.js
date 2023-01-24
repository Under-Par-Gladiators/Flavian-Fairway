import React from "react";
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
  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/competitive" element={<Competitive />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/metricsnew" element={<MetricsNew {...props} />} />
        <Route path="/metricsshow/:id" element={<MetricsShow {...props} />} />
        <Route path="/metricsedit" element={<MetricsEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

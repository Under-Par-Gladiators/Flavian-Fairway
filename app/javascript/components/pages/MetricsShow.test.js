import React from "react";
import { render, screen } from "@testing-library/react";
import MetricsShow from "./MetricsShow";
import { BrowserRouter } from "react-router-dom";

describe("<MetricsShow />", () => {
  it("renders without crashing when signed out", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <MetricsShow />
      </BrowserRouter>,
      div
    );
  });
  it("renders without crashing when signed in", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <MetricsShow logged_in={true} />
      </BrowserRouter>,
      div
    );
  });
  it("has specific items pertaining to metrics", () => {
    render(
      <BrowserRouter>
        <MetricsShow />
      </BrowserRouter>
    );
    expect(screen.getByText("Location:")).toBeInTheDocument();
    expect(screen.getByText("Name of Run:")).toBeInTheDocument();
    expect(screen.getByText("Run Difficulty:")).toBeInTheDocument();
    expect(screen.getByText("Elevation Change:")).toBeInTheDocument();
    expect(screen.getByText("Average Speed:")).toBeInTheDocument();
    expect(screen.getByText("Number of Runs:")).toBeInTheDocument();
    expect(screen.getByText("Comment:")).toBeInTheDocument();
    expect(screen.getByText("Wins:")).toBeInTheDocument();
  });
});

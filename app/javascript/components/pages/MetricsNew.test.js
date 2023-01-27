import React from "react";
import { render, screen } from "@testing-library/react";
import MetricsNew from "./MetricsNew";
import { BrowserRouter } from "react-router-dom";

describe("<MetricsNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <MetricsNew />
      </BrowserRouter>
    );
  });

  it("Has a form with correct labels", () => {
    const formLocation = screen.getByText("Location");
    expect(formLocation.getAttribute("For")).toEqual("location");

    const formNameOfRun = screen.getByText("Name of Run");
    expect(formNameOfRun.getAttribute("For")).toEqual("name_of_run");

    const formRunDifficulty = screen.getByText("Run Difficulty");
    expect(formRunDifficulty.getAttribute("For")).toEqual("run_difficulty");

    const formElevationChange = screen.getByText("Elevation Change");
    expect(formElevationChange.getAttribute("For")).toEqual("elevation_change");

    const formAverageSpeed = screen.getByText("Average Speed");
    expect(formAverageSpeed.getAttribute("For")).toEqual("average_speed");

    const formNumberOfRuns = screen.getByText("Number of Runs");
    expect(formNumberOfRuns.getAttribute("For")).toEqual("number_of_runs");

    const formComment = screen.getByText("Comment");
    expect(formComment.getAttribute("For")).toEqual("comment");
  });
});

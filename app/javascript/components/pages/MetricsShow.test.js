import React from "react";
import { render } from "@testing-library/react";
import MetricsShow from "./MetricsShow";
import { BrowserRouter } from "react-router-dom";

describe("<MetricsShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <MetricsShow />
      </BrowserRouter>,
      div
    );
  });
});

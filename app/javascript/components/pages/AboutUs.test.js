import React from "react";
import { render } from "@testing-library/react";
import AboutUs from "./AboutUs";
import { BrowserRouter } from "react-router-dom";

describe("<AboutUs />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>,
      div
    );
  });
})
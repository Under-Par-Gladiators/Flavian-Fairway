import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("<Home />", () => {
  it("renders without crashing when signed out", () => {
    const div = document.createElement("div");
    render(<Home />, div);
  });
  it("renders without crashing when signed in", () => {
    const div = document.createElement("div");
    render(<Home logged_in={true} />, div);
  });
});

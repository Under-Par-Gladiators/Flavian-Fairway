import React from "react";
import { render, screen } from "@testing-library/react";
import Competitive from "./Competitive";
import { BrowserRouter } from "react-router-dom";

describe("<Competitive />", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      render(
        <BrowserRouter>
          <Competitive />
        </BrowserRouter>,
        div
      );
    });
  });
  
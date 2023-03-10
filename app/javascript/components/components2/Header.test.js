import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    );
  });
  it("has functioning nav links", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    );
    userEvent.click(screen.getByText("Flavian Fairway"));
    expect(screen.getByText("Flavian Fairway")).toBeInTheDocument();
    userEvent.click(screen.getByText("Login"));
    expect(screen.getByText("Login")).toBeInTheDocument();
    userEvent.click(screen.getByText("Sign Up"));
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    userEvent.click(screen.getByText("Pages"));
    expect(screen.getByText("Pages")).toBeInTheDocument();
  });
});

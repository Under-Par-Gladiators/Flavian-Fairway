import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
      div
    );
  });
  it("has functioning nav links when signed out", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Navigation />
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
  it("has functioning nav links when signed in", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Navigation logged_in={true} />
      </BrowserRouter>,
      div
    );
    userEvent.click(screen.getByText("Flavian Fairway"));
    expect(screen.getByText("Flavian Fairway")).toBeInTheDocument();
    userEvent.click(screen.getByText("Sign Out"));
    expect(screen.getByText("Sign Out")).toBeInTheDocument();
    userEvent.click(screen.getByText("Pages"));
    expect(screen.getByText("Pages")).toBeInTheDocument();
  });
});

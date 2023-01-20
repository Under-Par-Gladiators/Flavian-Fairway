import React from "react"
import { render, screen } from "@testing-library/react"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"


describe("<Footer />", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div")
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
        div
      )
    })
})
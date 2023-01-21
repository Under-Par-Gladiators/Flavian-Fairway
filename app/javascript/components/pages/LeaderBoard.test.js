import React from "react"
import { render } from "@testing-library/react"
import LeaderBoard from "./LeaderBoard"

describe("<LeaderBoard />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<LeaderBoard />, div)
  })
})
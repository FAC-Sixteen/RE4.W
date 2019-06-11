import React from "react"
import ReactDOM from "react-dom"
import { render, fireEvent } from "@testing-library/react"
import Button from "./Button"

test("Button renders", () => {
    const { getByTestId } = render(<Button />)
    getByTestId("button")
})

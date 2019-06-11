import React from "react"
import ReactDOM from "react-dom"
import { render, fireEvent } from "@testing-library/react"
import { SmallButton, LargeButton } from "./Button"

test("Small button renders", () => {
    const { getByTestId } = render(<SmallButton />)
    getByTestId("small-button")
})

test("Large button renders", () => {
    const { getByTestId } = render(<LargeButton />)
    getByTestId("large-button")
})


import React from "react";
// import ReactDOM from "react-dom"
import { render } from "@testing-library/react";
import Game from "./Game";

test("Game renders", () => {
    const { getByTestId } = render(<Game />);
    getByTestId("game");
});

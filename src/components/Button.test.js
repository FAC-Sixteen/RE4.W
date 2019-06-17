import React from "react";
// import ReactDOM from "react-dom"
import { render } from "@testing-library/react";
import Button from "./Button";

test("Button renders", done => {
    const { getByTestId } = render(<Button />);
    getByTestId("button");
    done();
});

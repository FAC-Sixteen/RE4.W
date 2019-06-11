import React from "react";
import { StyledSmallButton, StyledLargeButton } from "./Button.style";

const SmallButton = props => {
    return (
        <StyledSmallButton onClick={props.onClick} data-testid="small-button">
            {props.children}
        </StyledSmallButton>
    );
};

const LargeButton = props => {
    return (
        <StyledLargeButton onClick={props.onClick} data-testid="large-button">
            {props.children}
        </StyledLargeButton>
    );
};

export { SmallButton, LargeButton };

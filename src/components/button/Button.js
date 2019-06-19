import React from "react";
import {
    StyledSmallButton,
    StyledLargeButton,
    StyledInactiveButton,
} from "./Button.style";

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

const InactiveButton = props => {
    return <StyledInactiveButton>{props.children}</StyledInactiveButton>;
};

export { SmallButton, LargeButton, InactiveButton };

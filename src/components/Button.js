import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
    box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
    font-family: Bangers;
    font-style: normal;
    font-weight: normal;
    font-size: 2em;
    padding: 0.5em;
    color: black
    background: white;
border: 4px solid black;
box-sizing: border-box;
border-radius: 3em;
`

const Button = props => {
    return <StyledButton data-testid="button">{props.children}</StyledButton>
}

export default Button

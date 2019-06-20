import styled from "styled-components";

const StyledButton = styled.button`
    box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
    font-family: Bangers;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    padding: 0.5em;
    color: black;
    background-color: white;
    border: 4px solid black;
    box-sizing: border-box;
    border-radius: 3em;
    width: ${props => props.length}em;
    cursor: pointer;
    margin: 0.5em;
`;

const StyledSmallButton = styled(StyledButton)`
    width: 16rem;
    @media only screen and (max-width: 768px) {
        width: 8rem;
        font-size: 1rem;
    }
`;

const StyledLargeButton = styled(StyledButton)`
    width: 32rem;
    @media only screen and (max-width: 768px) {
        width: 16rem;
        font-size: 1rem;
    }
`;

const StyledInactiveButton = styled(StyledLargeButton)`
    background-color: grey;
    opacity: 0.5;
    cursor: default;
`;

export { StyledSmallButton, StyledLargeButton, StyledInactiveButton };

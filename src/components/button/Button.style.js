import styled from "styled-components";

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
    width: ${props => props.length}em;
`;

const StyledSmallButton = styled(StyledButton)`
    width: 24rem;
    @media only screen and (max-width: 768px) {
        width: 8rem;
    }
`;

const StyledLargeButton = styled(StyledButton)`
    width: 32rem;
    @media only screen and (max-width: 768px) {
        width: 16rem;
    }
`;

export { StyledSmallButton, StyledLargeButton };

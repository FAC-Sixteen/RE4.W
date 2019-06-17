import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100vw;
    height: 4rem;
    background-color: #fcc312;
    border-bottom: 0.5rem solid black;
    position: fixed;
    top: 0;
`;

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 8rem;

    @media only screen and (max-width: 768px) {
        height: 4rem;
    }
`;

const StyledText = styled.img`
    width: 4em;
`;

export { StyledHeader, StyledContainer, StyledText };

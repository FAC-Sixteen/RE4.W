import styled from "styled-components";

import ComicBackground from "../../assets/comic-bg7.jpg";

const StyledCreditsPage = styled.div`
    background-image: url(${ComicBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    min-height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: bangers;
    font-size: 2em;
`;

const CreditText = styled.div`
    width: 60vw;
`;

const CreditLink = styled.a`
    border: 3px solid black;
    background-color: white;
    text-decoration: none;
    color: black;
`;

export { StyledCreditsPage, CreditLink, CreditText };

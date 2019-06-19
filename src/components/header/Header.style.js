import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100vw;
    height: 10vh;
    background-color: #fcc312;
    border-bottom: 0.5rem solid black;
    position: fixed;
    top: 0;
    z-index: 5;

    @media only screen and (max-width: 768px) {
        border-bottom: 0.25rem solid black;
    }
`;

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 20vh;

    @media only screen and (max-width: 768px) {
        height: 10vh;
    }
`;

const StyledText = styled.img`
    width: 10em;
    margin: 0em 2em;

    @media only screen and (max-width: 768px) {
        width: 6em;
        margin: 0em 1em;
    }
`;

const StyledLogo = styled.img`
    width: 12em;
    margin: 0em 2em;

    @media only screen and (max-width: 768px) {
        width: 6rem;
        margin: 0;
    }
`;

const SuperheroContainer = styled.div`
    width: 12em;
    margin: 0em 2em;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 3rem;
        margin: 0;
    }
`;

export {
    StyledHeader,
    StyledContainer,
    StyledText,
    StyledLogo,
    SuperheroContainer,
};

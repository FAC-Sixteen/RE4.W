import styled from "styled-components";
import ComicBackground from "../../assets/comic-bg7.jpg";

const StyledHome = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledLogo = styled.img`
    width: 16em;
    margin: auto;
    position: relative;
    margin-bottom: initial;
    margin-top: initial;
    padding-bottom: 3em;
`;
const StyledLogoTitle = styled.img`
    width: 24em;
    margin: auto;
    position: relative;
    margin-bottom: initial;
    margin-top: initial;
    padding-bottom: 4em;

    @media only screen and (max-width: 768px) {
        width: 16em;
    }
`;

const HomeBackground = styled.div`
    background-image: url(${ComicBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    top: 0;
`;

const EndCredits = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    text-align: right;
    font-family: bangers;
    font-size: 2em;
    padding: 0.2em;
    color: black;
    background-color: white;
    border: 4px solid black;
    text-decoration: underline;
`;
export { HomeBackground, StyledHome, StyledLogo, StyledLogoTitle, EndCredits };

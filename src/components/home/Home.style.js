import styled from "styled-components";
import ComicBackground from "../../assets/comic-bg7.jpg";

const StyledHome = styled.div`
    background-image: url(${ComicBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    top: 0;
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
`;
export { StyledHome, StyledLogo, StyledLogoTitle };

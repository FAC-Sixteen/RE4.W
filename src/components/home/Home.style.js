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
`;

const StyledLogo = styled.img`
    width: 16em;
    margin: auto;
    position: relative;
    margin-bottom: initial;
    margin-top: initial;
    padding: 6em;
`;
export { StyledHome, StyledLogo };

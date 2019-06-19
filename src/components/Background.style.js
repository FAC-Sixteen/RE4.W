import styled from "styled-components";
import GreenComicBG from "../assets/GreenComicBG.jpg";

const Background = styled.div`
    background-image: url(${GreenComicBG});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    min-height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    @media only screen and (max-width: 768px) {
        height: unset;
    }
`;

export default Background;

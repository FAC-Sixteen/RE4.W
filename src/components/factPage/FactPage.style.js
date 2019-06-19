import styled from "styled-components";
import GreenComicBG from "../../assets/GreenComicBG.jpg";
import FactBubbleImg from "../../assets/FactBubble.png";

const StyledFactPage = styled.div`
    background-image: url(${GreenComicBG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 90vh;
    margin-top: 10vh;
`;

const FactBubble = styled.img`
    width: 32em;
`;

const WiseMan = styled.img`
    width: 32em;
`;

export { StyledFactPage, FactBubble, WiseMan };

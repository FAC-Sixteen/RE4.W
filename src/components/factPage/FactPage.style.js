import styled from "styled-components";
import GreenComicBG from "../../assets/GreenComicBG.jpg";
import FactBubbleImg from "../../assets/FactBubble.png";

const StyledFactPage = styled.div`
    background-image: url(${GreenComicBG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    font-family: Bangers;
    font-style: normal;
    font-weight: normal;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const FactBubbleContainer = styled.div`
    width: 40em;
    height: 32em;
    position: relative;
    display: flex;
    justify-content: center;
`;

const FactBubble = styled.img`
    width: 40em;
    height: auto;
`;
const FactBubbleFact = styled.div`
    width: 16em;
    text-align: center;
    font-size: 1.5em;
    margin: auto;
    position: absolute;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: rotate(-20deg);
`;

const WiseManContainer = styled.div`
    width: 32em;
`;

const WiseManText = styled.div`
    width: fit-content;
    border: 4px solid black;
    border-radius: 1em;
    background-color: white;
    padding: 1em;
    margin: 3em;
`;

const WiseMan = styled.img`
    width: 16em;
`;

export {
    StyledFactPage,
    FactBubble,
    FactBubbleContainer,
    FactBubbleFact,
    WiseManContainer,
    WiseMan,
    WiseManText,
};

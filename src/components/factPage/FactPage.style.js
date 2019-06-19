import styled from "styled-components";

const StyledFactPage = styled.div`
    font-family: Bangers;
    font-style: normal;
    font-weight: normal;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const FactBubbleContainer = styled.div`
    width: 50vw;
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 8rem;
    padding-bottom: 4rem;
    @media only screen and (max-width: 768px) {
        width: 90vw;
        padding-top: 4rem;
    }
`;

const FactBubble = styled.img`
    height: 100%;
    width: 100%;
`;
const FactBubbleFact = styled.div`
    width: 30vw;
    text-align: center;
    font-size: 1.5em;
    margin: auto;
    position: absolute;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: rotate(-20deg);
    align-self: center;
    @media only screen and (max-width: 768px) {
        width: 50vw;
        font-size: 1.2em;
    }
`;

const WiseManContainer = styled.div`
    width: 50vw;
    padding-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 4rem;
    @media only screen and (max-width: 768px) {
        width: 100vw;
        padding-top: 4rem;
        padding-bottom: 0;
    }
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

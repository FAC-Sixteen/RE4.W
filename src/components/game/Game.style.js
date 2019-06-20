import styled from "styled-components";
import styledMain from "../main/Main.style";

const GameFlex = styled(styledMain)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 20vh;
    height: 80vh;

    @media only screen and (max-width: 768px) {
        margin-top: 10vh;
        height: 90vh;
    }
`;

const ItemContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 2em 0em;
    @media only screen and (max-width: 768px) {
        margin: 1em 0em;
    }
}
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100vw;
    margin: 1em 0em;
`;

const ScoreText = styled.p`
    font-family: Bangers;
    font-size: 2em;
    margin: 0 1em;
    padding: 0;
    width: 4em;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size: 1em;
    }
`;

const ExplainText = styled.p`
    font-family: Bangers;
    font-size: 1.5em;
    margin: 0;
    padding: 0;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size: 1em;
    }
`;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: white;
    opacity: 0.5;
    position: fixed;
    bottom: 0;
    left: 0;
`;

export {
    GameFlex,
    ItemContainer,
    TopContainer,
    ScoreText,
    ExplainText,
    Overlay,
};

import styled from "styled-components";
import styledMain from "../main/Main.style";

const GameFlex = styled(styledMain)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em 0em;
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
`;

const ScoreText = styled.p`
    font-family: Bangers;
    font-size: 2em;
    margin: 0 1em;
    padding: 0;
    width: 4em;
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

export { GameFlex, ItemContainer, TopContainer, ScoreText, ExplainText };
import styled from "styled-components";

const FactContainer = styled.p`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    width: 200px;
    padding: 10px;
    border: 5px solid black;
`;

const ScoreContainer = styled.div`
    width: 32em;
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    @media only screen and (max-width: 1000px) {
        width: 90vw;
        margin-top: 8rem;
        margin-bottom: 0;
    }
`;

const ScoreBubble = styled.img`
    height: 100%;
    width: 100%;
`;
const ScoreText = styled.div`
    width: 30vw;
    text-align: center;
    font-size: 2em;
    margin: auto;
    position: absolute;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: rotate(-20deg);
    align-self: center;
    @media only screen and (max-width: 768px) {
        // width: 50vw;
        // font-size: 1.3em;
    }
`;

export { FactContainer, ScoreContainer, ScoreBubble, ScoreText };

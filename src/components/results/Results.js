import React from "react";
import { DragItem } from "../item/item.style";
import Header from "../header/Header";
import Main from "../main/Main";
import { SmallButton } from "../button/Button";
import { Link } from "react-router-dom";
import {
    StyledFactPage,
    WiseManContainer,
    WiseMan,
    WiseManText,
} from "../factPage/FactPage.style";
import { IndividualItem } from "../item/item.style";
import { ItemContainer } from "../game/Game.style";
import {
    FactContainer,
    ScoreContainer,
    ScoreBubble,
    ScoreText,
} from "./Results.style";
import WiseManSvg from "../avatars/wise-man.svg";
import Background from "../Background.style";
import ScoreBubbleImg from "../../assets/ScoreBubble.png";

const Results = ({ location: { score, items } }) => {
    const incorrectItems = items.filter(item => !item.correct);
    const [display, setDisplay] = React.useState(false);
    const [fact, setFact] = React.useState("");

    const displayFact = i => {
        setDisplay(!display);
        setFact(incorrectItems[i].Fact);
    };

    return (
        <React.Fragment>
            <Header text="Results" />
            <Main>
                <Background>
                    <StyledFactPage>
                        <ScoreContainer>
                            <ScoreText>Your score is {score}!</ScoreText>
                            <ScoreBubble src={ScoreBubbleImg} />
                        </ScoreContainer>
                        <WiseManContainer>
                            <WiseManText>
                                oh no, you missed a few! Click on the item to
                                see some recycling tips.
                            </WiseManText>
                            <WiseMan src={WiseManSvg} />
                        </WiseManContainer>
                        <ItemContainer>
                            {incorrectItems.map((item, i) => (
                                <IndividualItem
                                    key={i}
                                    onClick={() => displayFact(i)}
                                >
                                    <DragItem
                                        src={item.Image}
                                        alt={item.Category}
                                    />
                                    <p>{item.Category}</p>
                                </IndividualItem>
                            ))}

                            {display ? (
                                <FactContainer>{fact}</FactContainer>
                            ) : null}
                        </ItemContainer>

                        <Link to="/">
                            <SmallButton>Play Again</SmallButton>
                        </Link>
                    </StyledFactPage>
                </Background>
            </Main>
        </React.Fragment>
    );
};

export default Results;

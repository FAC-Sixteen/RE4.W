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
    const correctItems = items.filter(item => item.correct);
    const win = incorrectItems.length === 0;
    const [display, setDisplay] = React.useState(false);
    const [tip, setTip] = React.useState("");

    const displayFact = i => {
        setDisplay(!display);
        setTip(incorrectItems[i].Tip);
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
                            {win ? (
                                <WiseManText data-testid="result-text-win">
                                    Wow, full marks! Click on the item to see
                                    some recycling tips.
                                </WiseManText>
                            ) : (
                                <WiseManText data-testid="result-text-lose">
                                    Oh no, you missed a few! Click on the item
                                    to see some recycling tips.
                                </WiseManText>
                            )}
                            <WiseMan src={WiseManSvg} />
                        </WiseManContainer>
                        <ItemContainer>
                            {win
                                ? correctItems.map((item, i) => (
                                      <IndividualItem
                                          key={i}
                                          onClick={() => displayFact(i)}
                                          data-testid="item-win"
                                      >
                                          <DragItem
                                              src={item.Image}
                                              alt={item.Category}
                                          />
                                          <p>{item.Category}</p>
                                      </IndividualItem>
                                  ))
                                : incorrectItems.map((item, i) => (
                                      <IndividualItem
                                          key={i}
                                          onClick={() => displayFact(i)}
                                          data-testid="item-lose"
                                      >
                                          <DragItem
                                              src={item.Image}
                                              alt={item.Category}
                                          />
                                          <p>{item.Category}</p>
                                      </IndividualItem>
                                  ))}

                            {display ? (
                                <FactContainer>{tip}</FactContainer>
                            ) : null}
                        </ItemContainer>

                        <Link to="/game">
                            <SmallButton>Play Again</SmallButton>
                        </Link>
                    </StyledFactPage>
                </Background>
            </Main>
        </React.Fragment>
    );
};

export default Results;

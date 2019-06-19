import React from "react";
import DragItem from "../item/item.style";
import Header from "../header/Header";
import Main from "../main/Main";
import { SmallButton } from "../button/Button";
import { Link } from "react-router-dom";
import {
    StyledFactPage,
    FactBubble,
    FactBubbleContainer,
    FactBubbleFact,
    WiseManContainer,
    WiseMan,
    WiseManText,
} from "../factPage/FactPage.style";
import WiseManSvg from "../avatars/wise-man.svg";

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
                <StyledFactPage>
                    <WiseManContainer>
                        <WiseManText>
                            oh no, you missed a few! Click on the item to see
                            some recycling tips.
                        </WiseManText>
                        <WiseMan src={WiseManSvg} />
                    </WiseManContainer>
                    {incorrectItems.map((item, i) => (
                        <div key={i} onClick={() => displayFact(i)}>
                            <DragItem src={item.Image} alt={item.Category} />
                            <p>{item.Category}</p>
                        </div>
                    ))}
                    {display ? <p>{fact}</p> : null}
                    <div>Your score is {score}!</div>
                    <Link to="/">
                        <SmallButton>Play Again</SmallButton>
                    </Link>
                </StyledFactPage>
            </Main>
        </React.Fragment>
    );
};

export default Results;

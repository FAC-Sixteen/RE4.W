import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Main from "../main/Main";

import {
    StyledFactPage,
    FactBubble,
    FactBubbleContainer,
    FactBubbleFact,
    WiseManContainer,
    WiseMan,
    WiseManText,
} from "./FactPage.style";
import { LargeButton } from "../button/Button";
import FactBubbleImg from "../../assets/FactBubble.png";
import WiseManSvg from "../avatars/wise-man.svg";

const FactPage = ({ location: { score, data } }) => {
    return (
        <React.Fragment>
            <Header text="Results" />
            <Main>
                <StyledFactPage>
                    <WiseManContainer>
                        <WiseManText>
                            Hey, well done! Just before we see your score, did
                            you know:
                        </WiseManText>
                        <WiseMan src={WiseManSvg} />
                    </WiseManContainer>

                    <FactBubbleContainer>
                        <FactBubbleFact>{data[0].Fact}</FactBubbleFact>
                        <FactBubble src={FactBubbleImg} />
                    </FactBubbleContainer>

                    <Link
                        to={{
                            pathname: "/results",
                            score: score,
                            items: data,
                        }}
                    >
                        <LargeButton>See Your Results!</LargeButton>
                    </Link>
                </StyledFactPage>
            </Main>
        </React.Fragment>
    );
};

export default FactPage;

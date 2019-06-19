import React from "react";
import { Link } from "react-router-dom";

import { StyledFactPage, FactBubble, WiseMan } from "./FactPage.style";
import { LargeButton } from "../../components/button/Button";
import { ReactComponent as WiseManImg } from "../../components/avatars/wise-man.svg";
import FactBubbleImg from "../../assets/FactBubble.png";

const FactPage = ({ location: { score, data } }) => {
    return (
        <StyledFactPage>
            <WiseMan src={WiseManImg} />
            <FactBubble src={FactBubbleImg} />
            <p>Hey, well done! Just before we see your score, did you know:</p>
            <div>{data[0].Fact}</div>
            <Link
                to={{
                    pathname: "/results",
                    score: score,
                }}
            >
                <LargeButton>See Your Results!</LargeButton>
            </Link>
        </StyledFactPage>
    );
};

export default FactPage;

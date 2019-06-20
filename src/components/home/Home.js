import React from "react";
import { Link } from "react-router-dom";

import {
    StyledHome,
    StyledLogo,
    StyledLogoTitle,
    EndCredits,
    HomeBackground,
} from "./Home.style";
import { LargeButton } from "../button/Button";
import Logo from "../../assets/RecyclingHeroesLogo.png";
import LogoTitle from "../../assets/RecyclingHeroesTitle.png";

const Home = () => {
    return (
        <React.Fragment>
            <HomeBackground>
                <StyledHome>
                    <StyledLogo src={Logo} />
                    <StyledLogoTitle src={LogoTitle} />
                    <Link
                        to={{
                            pathname: "/game",
                        }}
                    >
                        <LargeButton>Start Game</LargeButton>
                    </Link>
                </StyledHome>
                <Link to={{ pathname: "/credits" }}>
                    <EndCredits>Credits</EndCredits>
                </Link>
            </HomeBackground>
        </React.Fragment>
    );
};

export default Home;

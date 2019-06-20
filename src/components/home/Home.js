import React from "react";
import { Link } from "react-router-dom";

import { StyledHome, StyledLogo, StyledLogoTitle } from "./Home.style";
import { LargeButton } from "../button/Button";
import Logo from "../../assets/RecyclingHeroesLogo.png";
import LogoTitle from "../../assets/RecyclingHeroesTitle.png";

const Home = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default Home;

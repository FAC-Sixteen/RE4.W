import React from "react";
import { Link } from "react-router-dom";

import fetchData from "../../utils/fetchData";

import {
    StyledHome,
    StyledLogo,
    StyledLogoTitle,
    EndCredits,
    HomeBackground,
} from "./Home.style";
import { LargeButton, InactiveButton } from "../button/Button";
import Logo from "../../assets/RecyclingHeroesLogo.png";
import LogoTitle from "../../assets/RecyclingHeroesTitle.png";

const Home = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetchData(setData);
    }, []);

    if (!data)
        return (
            <React.Fragment>
                <HomeBackground>
                    <StyledHome>
                        <StyledLogo src={Logo} />
                        <StyledLogoTitle src={LogoTitle} />
                        <InactiveButton>Loading...</InactiveButton>
                    </StyledHome>
                    <Link to={{ pathname: "/credits" }}>
                        <EndCredits>Credits</EndCredits>
                    </Link>
                </HomeBackground>
            </React.Fragment>
        );

    return (
        <React.Fragment>
            <HomeBackground>
                <StyledHome>
                    <StyledLogo src={Logo} />
                    <StyledLogoTitle src={LogoTitle} />
                    <Link
                        to={{
                            pathname: "/game",
                            data: data,
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

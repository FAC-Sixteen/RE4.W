import React from "react";
import { Link } from "react-router-dom";

import fetchData from "../../utils/fetchData";

import { StyledHome, StyledLogo, StyledLogoTitle } from "./Home.style";
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
                <StyledHome>
                    <StyledLogo src={Logo} />
                    <StyledLogoTitle src={LogoTitle} />
                    <InactiveButton>Loading...</InactiveButton>
                </StyledHome>
            </React.Fragment>
        );

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default Home;

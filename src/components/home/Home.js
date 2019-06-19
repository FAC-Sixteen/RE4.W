import React from "react";
import { Link } from "react-router-dom";

import fetchData from "../../utils/fetchData";

import { StyledHome, StyledLogo } from "./Home.style";
import { LargeButton } from "../button/Button";
import Logo from "../../assets/RecyclingHeroesLogo.png";

import Header from "../header/Header";

const Home = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetchData(setData);
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <React.Fragment>
            <Header text="Game"></Header>
            <StyledHome>
                <StyledLogo src={Logo} />
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

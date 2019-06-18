import React from "react";
import { Link } from "react-router-dom";

import fetchData from "../../utils/fetchData";

import StyledHome from "./Home.style";
import { LargeButton } from "../button/Button";

const Home = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetchData(setData);
    }, []);

    if (!data) return <div>Loading...</div>;

    console.log(data);
    return (
        <React.Fragment>
            <StyledHome>
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

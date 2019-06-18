import React from "react";
import { Link } from "react-router-dom";

import selectData from "../../utils/selectData";
import StyledHome from "./Home.style";
import { LargeButton } from "../button/Button";

const Home = () => {
    const [data, setData] = React.useState(null);
    const getData = () => {
        return fetch(`.netlify/functions/getData`)
            .then(result => result.json())
            .then(result => selectData(result.records))
            .then(result => setData(result))
            .catch(err => console.log(err));
    };
    React.useEffect(() => {
        getData();
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

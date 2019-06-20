import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import fetchData from "../utils/fetchData";

import Game from "../components/game/GameContainer";
import Home from "../components/home/Home";
import Results from "../components/results/Results";
import FactPage from "../components/factPage/FactPage";

import {
    StyledHome,
    StyledLogo,
    StyledLogoTitle,
} from "../components/home/Home.style";
import { InactiveButton } from "../components/button/Button";
import Logo from "../assets/RecyclingHeroesLogo.png";
import LogoTitle from "../assets/RecyclingHeroesTitle.png";

function App() {
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
        <Router>
            <Route exact path="/" component={Home} />
            <Route
                path="/game"
                render={props => <Game {...props} data={data} />}
            />
            <Route path="/factpage" component={FactPage} />
            <Route path="/results" component={Results} />
        </Router>
    );
}

export default App;

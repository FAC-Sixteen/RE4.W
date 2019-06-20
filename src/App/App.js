import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
} from "react-router-dom";

import fetchData from "../utils/fetchData";

import Game from "../components/game/GameContainer";
import Home from "../components/home/Home";
import Results from "../components/results/Results";
import FactPage from "../components/factPage/FactPage";
import Credits from "../components/creditsPage/CreditsPage";

import {
    StyledHome,
    StyledLogo,
    StyledLogoTitle,
    EndCredits,
    HomeBackground,
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
                <HomeBackground>
                    <StyledHome>
                        <StyledLogo src={Logo} />
                        <StyledLogoTitle src={LogoTitle} />
                        <InactiveButton>Loading...</InactiveButton>
                    </StyledHome>
                    <Router>
                        <Link to={{ pathname: "/credits" }}>
                            <EndCredits>Credits</EndCredits>
                        </Link>
                    </Router>
                </HomeBackground>
            </React.Fragment>
        );
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route
                path="/game"
                render={props => <Game {...props} data={data} />}
            />
            <Route
                path="/factpage"
                render={props =>
                    !props.location.score ? (
                        <Redirect to="/" />
                    ) : (
                        <FactPage {...props} />
                    )
                }
            />
            <Route
                path="/results"
                render={props =>
                    !props.location.score ? (
                        <Redirect to="/" />
                    ) : (
                        <Results {...props} />
                    )
                }
            />
            <Route path="/credits" component={Credits} />
        </Router>
    );
}

export default App;

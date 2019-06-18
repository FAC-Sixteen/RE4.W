import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Game from "../components/game/GameContainer";
import Main from "../components/main/Main";
import Home from "../components/home/Home";
import Results from "../components/results/Results";
import FactPage from "../components/factPage/FactPage";

function App() {
    return (
        <Router>
            <Main>
                <Route exact path="/" component={Home} />
                <Route path="/game" component={Game} />
                <Route path="/factpage" component={FactPage} />
                <Route path="/results" component={Results} />
            </Main>
        </Router>
    );
}

export default App;

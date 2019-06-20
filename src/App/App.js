import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Game from "../components/game/GameContainer";
import Home from "../components/home/Home";
import Results from "../components/results/Results";
import FactPage from "../components/factPage/FactPage";
import Credits from "../components/creditsPage/CreditsPage";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/factpage" component={FactPage} />
            <Route path="/results" component={Results} />
            <Route path="/credits" component={Credits} />
        </Router>
    );
}

export default App;

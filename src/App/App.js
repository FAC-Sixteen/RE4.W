import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Game from "../components/game/GameContainer";
import Main from "../components/main/Main";
import Home from "../components/home/Home";
import Results from "../components/results/Results";
import FactPage from "../components/factPage/FactPage";
import Header from "../components/header/Header";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/factpage" component={FactPage} />
            <Route path="/results" component={Results} />
        </Router>
    );
}

export default App;

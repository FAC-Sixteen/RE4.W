import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

//components
// import { SmallButton } from "./components/button/Button";
import Game from "./components/Game";
// import Superhero from "./components/Superhero";
import Main from "./components/main/Main";
import Home from "./components/home/Home";
import Results from "./components/results/Results";
import FactPage from "./components/factPage/FactPage";

//utils
// import characterColours from "./utils/character-colours";

function App() {
    // // const [result, setResult] = React.useState(false);
    // const [ninja, setNinja] = React.useState({
    //     hero: "ninja",
    //     colours: {
    //         skin: characterColours.skin[0],
    //         base: characterColours.base[0],
    //         hair: characterColours.hair[0],
    //     },
    // });

    // const handleSetNinja = () =>
    //     setNinja({
    //         hero: "short",
    //         colours: {
    //             skin: characterColours.skin[3],
    //             base: characterColours.base[4],
    //             hair: characterColours.hair[0],
    //         },
    //     });

    return (
        <Router>
            <Main>
                <Route exact path="/" component={Home} />
                <Route path="/game" component={Game} />
                <Route path="/factpage" component={FactPage} />
                <Route path="/results" component={Results} />
                {/* <Superhero character={ninja} />
                <SmallButton onClick={handleSetNinja}>Click me!</SmallButton> */}
            </Main>
        </Router>
    );
}

export default App;

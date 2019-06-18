import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Game from "../components/game/Game";
import Main from "../components/main/Main";
import Home from "../components/home/Home";
import Results from "../components/results/Results";
import FactPage from "../components/factPage/FactPage";

// import fetchData from "../utils/fetchData";

function App() {
    // const [data, setData] = React.useState(null);

    // React.useEffect(() => {
    //     fetchData(setData);
    // }, []);

    // if (!data) return <div>Loading...</div>;

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

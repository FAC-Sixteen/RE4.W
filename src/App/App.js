import React from "react";
import "./App.css";
import Game from "../components/game/Game";

import fetchData from "../utils/fetchData";

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetchData(setData);
    }, []);

    if (!data) return <div>Loading...</div>;
    return (
        <div className="App">
            <main>
                <Game data={data} />
            </main>
        </div>
    );
}

export default App;

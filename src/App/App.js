import React from "react";
import "./App.css";
import Game from "../components/game/Game";

import selectData from "../utils/selectData";

function App() {
    const [data, setData] = React.useState(null);

    const getData = () => {
        return fetch(`.netlify/functions/getData`)
            .then(result => result.json())
            .then(result => selectData(result.records))
            .then(result => setData(result))
            .catch(err => console.error(err));
    };

    React.useEffect(() => {
        getData();
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

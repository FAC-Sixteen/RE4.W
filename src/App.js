import React from "react";
import "./App.css";
import Button from "./components/Button";
import Game from "./components/Game";

function App() {
    const [result, setResult] = React.useState(false);
    const [data, setData] = React.useState(null);

    const getData = () => {
        return fetch(`.netlify/functions/getData`)
            .then(result => result.json())
            .catch("error");
    };

    const assignData = () => {
        getData().then(result => {
            setData(result.records[0].fields.Item);
        });
    };
    // eslint-disable-next-line
    React.useEffect(() => assignData(), []);
    return (
        <div className="App">
            <main>
                <Game />

                <Button>Click me!</Button>
            </main>
        </div>
    );
}

export default App;

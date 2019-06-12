import React from "react";
import "./App.css";
import Button from "./components/Button";
import Game from "./components/Game";
import Superhero from "./components/Superhero";

import characterColours from "./utils/character-colours";

function App() {
    const [result, setResult] = React.useState(false);
    const [data, setData] = React.useState(null);
    const [ninja, setNinja] = React.useState({
        hero: "ninja",
        colours: {
            skin: characterColours.skin[0],
            base: characterColours.base[0],
            hair: characterColours.hair[0],
        },
    });

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

    const handleSetNinja = () =>
        setNinja({
            hero: "ninja",
            colours: {
                skin: characterColours.skin[1],
                base: characterColours.base[2],
                hair: characterColours.hair[5],
            },
        });

    // eslint-disable-next-line
    React.useEffect(() => assignData(), []);
    return (
        <div className="App">
            {/* <header className="App-header">
                <p>{data}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
            <main>
                <Game />
                <Superhero character={ninja} />
                <Button onClick={handleSetNinja}>Click me!</Button>
            </main>
        </div>
    );
}

export default App;

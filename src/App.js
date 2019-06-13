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
            .then(result => setData(result.records[0].fields.Item))
            .catch(err => console.log(err));
    };

    const handleSetNinja = () =>
        setNinja({
            hero: "short",
            colours: {
                skin: characterColours.skin[3],
                base: characterColours.base[4],
                hair: characterColours.hair[0],
            },
        });

    React.useEffect(() => {
        getData();
    }, []);
    return (
        <div className="App">
            <main>
                <Game />
                <Superhero character={ninja} />
                <Button onClick={handleSetNinja}>Click me!</Button>
            </main>
        </div>
    );
}

export default App;

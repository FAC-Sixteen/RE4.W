import React from "react";
import "./App.css";
import Button from "./components/Button";
import Game from "./components/Game";
import Superhero from "./components/Superhero";

import characterColours from "./utils/character-colours";
import selectData from "./utils/selectData";

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
            .then(result => selectData(result.records))
            .then(result => setData(result))
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
    if (!data) return <div>Loading...</div>;
    return (
        <div className="App">
            <main>
                <p>
                    {data[0].Item}, {data[0].Category}
                </p>
                <img src={data[0].Image}></img>

                <Game />
                <Superhero character={ninja} />
                <Button onClick={handleSetNinja}>Click me!</Button>
            </main>
        </div>
    );
}

export default App;

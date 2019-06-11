import React from "react";
import "./App.css";
import Button from "./components/Button";

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
            <header className="App-header">
                <p>{data}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <main>
                <Button>Click me!</Button>
            </main>
        </div>
    );
}

export default App;

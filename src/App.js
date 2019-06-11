import React from "react";
import "./App.css";
import { SmallButton, LargeButton } from "./components/button/Button";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

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
            <Header text="Game"></Header>
            <Main>
                {/* <SmallButton>Click me!</SmallButton> */}
                <SmallButton>Click me!</SmallButton>
                <LargeButton>and me!</LargeButton>
            </Main>
        </div>
    );
}

export default App;

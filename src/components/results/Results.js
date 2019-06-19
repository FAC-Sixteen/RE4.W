import React from "react";
import Header from "../header/Header";
import Main from "../main/Main";

import Background from "../Background.style";

const Results = ({ location: { score } }) => {
    console.log(score);
    return (
        <React.Fragment>
            <Header text="Results" />
            <Main>
                <Background>
                    <div>Results Page</div>
                    <div>Your score is {score}!</div>
                </Background>
            </Main>
        </React.Fragment>
    );
};

export default Results;

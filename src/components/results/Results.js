import React from "react";
import Header from "../header/Header";
import Main from "../main/Main";

const Results = ({ location: { score } }) => {
    console.log(score);
    return (
        <React.Fragment>
            <Header text="Results" />
            <Main>
                <div>Results Page</div>
                <div>Your score is {score}!</div>
            </Main>
        </React.Fragment>
    );
};

export default Results;

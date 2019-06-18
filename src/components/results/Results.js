import React from "react";

const Results = ({ location: { score } }) => {
    console.log(score);
    return (
        <React.Fragment>
            <div>Results Page</div>
            <div>Your score is {score}!</div>
        </React.Fragment>
    );
};

export default Results;

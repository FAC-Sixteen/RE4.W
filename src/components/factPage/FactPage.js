import React from "react";
import { Link } from "react-router-dom";

const FactPage = ({ location: { score, data } }) => {
    return (
        <React.Fragment>
            <p>Hey, well done! Just before we see your score, did you know:</p>
            <div>{data[0].Fact}</div>
            <Link
                to={{
                    pathname: "/results",

                    score: score,
                }}
            >
                See Your Results!
            </Link>
        </React.Fragment>
    );
};

export default FactPage;
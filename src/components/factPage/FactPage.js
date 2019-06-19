import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Main from "../main/Main";

const FactPage = ({ location: { score, data } }) => {
    return (
        <React.Fragment>
            <Header text="Results" />
            <Main>
                <p>
                    Hey, well done! Just before we see your score, did you know:
                </p>
                <div>{data[0].Fact}</div>
                <Link
                    to={{
                        pathname: "/results",

                        score: score,
                    }}
                >
                    See Your Results!
                </Link>
            </Main>
        </React.Fragment>
    );
};

export default FactPage;

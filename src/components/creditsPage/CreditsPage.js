import React from "react";

import Header from "../header/Header";
import Main from "../main/Main";
import { StyledCreditsPage } from "./CreditPage.style";

const CreditsPage = () => {
    return (
        <React.Fragment>
            <Header text="Credits" />
            <Main>
                <div>credits here</div>
            </Main>
        </React.Fragment>
    );
};

export default CreditsPage;

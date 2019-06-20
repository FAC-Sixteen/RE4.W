import React from "react";

import Header from "../header/Header";
import Main from "../main/Main";
import { StyledCreditsPage, CreditLink, CreditText } from "./CreditPage.style";

const CreditsPage = () => {
    return (
        <React.Fragment>
            <Header text="Credits" />
            <Main>
                <StyledCreditsPage>
                    <CreditText>
                        Icons and backgrounds made by{" "}
                        <CreditLink href="https://www.freepik.com/">
                            {" "}
                            Freepik
                        </CreditLink>{" "}
                        from{" "}
                        <CreditLink href="https://www.flaticon.com">
                            {" "}
                            www.flaticon.com
                        </CreditLink>
                    </CreditText>
                </StyledCreditsPage>
            </Main>
        </React.Fragment>
    );
};

export default CreditsPage;

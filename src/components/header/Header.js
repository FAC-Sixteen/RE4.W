import React from "react";
import { StyledHeader, StyledContainer, StyledText } from "./Header.style";
// import filepath from "../../assets/bin.png";

const Header = props => {
    const filepath = require(`../../assets/${props.text}.svg`);
    return (
        <StyledHeader>
            <StyledContainer>
                <StyledText src={filepath} />
            </StyledContainer>
        </StyledHeader>
    );
};

export default Header;

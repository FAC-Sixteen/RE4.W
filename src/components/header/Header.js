import React from "react";
import {
    StyledHeader,
    StyledContainer,
    StyledText,
    StyledLogo,
    SuperheroContainer,
} from "./Header.style";
import Superhero from "../superhero/Superhero";
import characterColours from "../../utils/character-colours";
import { Link } from "react-router-dom";

const Header = ({ text }) => {
    const [ninja] = React.useState({
        hero: "ninja",
        colours: {
            skin: characterColours.skin[1],
            base: characterColours.base[1],
            hair: characterColours.hair[1],
        },
    });

    const textFilepath = require(`../../assets/${text}.png`);
    const logoFilepath = require("../../assets/RecyclingHeroesLogo.png");

    return (
        <StyledHeader>
            <StyledContainer>
                <Link
                    to={{
                        pathname: "/",
                    }}
                >
                    <StyledLogo src={logoFilepath} />
                </Link>
                <StyledText src={textFilepath} />
                <SuperheroContainer>
                    <Superhero character={ninja} />
                </SuperheroContainer>
            </StyledContainer>
        </StyledHeader>
    );
};

export default Header;

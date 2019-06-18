import React from "react";
import { StyledHeader, StyledContainer, StyledText } from "./Header.style";
import Superhero from "../superhero/Superhero";
import characterColours from "../../utils/character-colours";

const Header = ({ text }) => {
    const [ninja, setNinja] = React.useState({
        hero: "ninja",
        colours: {
            skin: characterColours.skin[0],
            base: characterColours.base[0],
            hair: characterColours.hair[0],
        },
    });

    const handleSetNinja = () =>
        setNinja({
            hero: "short",
            colours: {
                skin: characterColours.skin[3],
                base: characterColours.base[4],
                hair: characterColours.hair[0],
            },
        });

    const filepath = require(`../../assets/${text}.png`);
    return (
        <StyledHeader>
            <StyledContainer>
                <StyledText src={filepath} />
                <Superhero character={ninja} />
            </StyledContainer>
        </StyledHeader>
    );
};

export default Header;

import React from "react";
import Ninja from "./avatars/Ninja";

const Superhero = ({ character }) => {
    const superHeroes = {
        ninja: <Ninja colours={character.colours} />,
    };
    return superHeroes[character.hero];
};

export default Superhero;

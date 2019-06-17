import React from "react";
import Ninja from "../avatars/Ninja";
import Short from "../avatars/Short";
import Man from "../avatars/Man";
import Woman from "../avatars/Woman";
import { ReactComponent as Wise } from "./avatars/wise-man.svg";

const Superhero = ({ character }) => {
    const superHeroes = {
        ninja: <Ninja colours={character.colours} />,
        short: <Short colours={character.colours} />,
        woman: <Woman colours={character.colours} />,
        man: <Man colours={character.colours} />,
        wise: <Wise />,
    };
    return superHeroes[character.hero];
};

export default Superhero;

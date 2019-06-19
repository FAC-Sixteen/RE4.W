import React from "react";
import isTouchDevice from "is-touch-device";
import { DesktopGame, TouchGame } from "./Game";

const Game = ({ location: { data } }) => {
    console.log(isTouchDevice());
    return isTouchDevice() ? (
        <TouchGame data={data} />
    ) : (
        <DesktopGame data={data} />
    );
};

export default Game;

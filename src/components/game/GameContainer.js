import React from "react";
import isTouchDevice from "is-touch-device";
import DesktopGame from "./Game";
import TouchGame from "./GameTouch";

const Game = ({ location: { data } }) => {
    return isTouchDevice() ? (
        <TouchGame data={data} />
    ) : (
        <DesktopGame data={data} />
    );
};

export default Game;

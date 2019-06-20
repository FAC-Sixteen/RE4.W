import React from "react";
import isTouchDevice from "is-touch-device";
import DesktopGame from "./Game";
import TouchGame from "./GameTouch";

import selectData from "../../utils/selectData";

const Game = ({ data }) => {
    const filteredData = selectData(data);
    console.log(isTouchDevice());
    return isTouchDevice() ? (
        <TouchGame data={filteredData} />
    ) : (
        <DesktopGame data={filteredData} />
    );
};

export default Game;

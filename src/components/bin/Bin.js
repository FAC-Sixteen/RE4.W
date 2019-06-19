import React from "react";
import { useDrop } from "react-dnd";
import StyledBin from "./Bin.style";
import TrashBin from "../../assets/TrashBin.png";
import RecyclingBin from "../../assets/RecyclingBin.png";

const Bin = ({ accept, onDrop, name, correctBin, wrongBin }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <StyledBin
            src={name === "recyclingBin" ? RecyclingBin : TrashBin}
            name={name}
            correctBin={correctBin}
            wrongBin={wrongBin}
            ref={drop}
        ></StyledBin>
    );
};

export default Bin;

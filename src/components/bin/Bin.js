import React from "react";
import { useDrop } from "react-dnd";
import StyledBin from "./Bin.style";
import TrashBin from "../../assets/TrashBin.png";
import RecyclingBin from "../../assets/RecyclingBin.png";

const Bin = ({ accept, onDrop, name }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
    const isActive = isOver && canDrop;
    return (
        <StyledBin
            src={name === "recyclingBin" ? RecyclingBin : TrashBin}
            ref={drop}
        ></StyledBin>
    );
};

export default Bin;

// {isActive
//     ? "Release to drop"
//     : `This bin accepts ${
//           name === "recyclingBin" ? "recycling" : "trash"
//       }`}

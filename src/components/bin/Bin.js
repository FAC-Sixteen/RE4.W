import React from "react";
import { useDrop } from "react-dnd";
import StyledBin from "./Bin.style";

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
        <StyledBin ref={drop}>
            {isActive
                ? "Release to drop"
                : `This bin accepts ${
                      name === "recyclingBin" ? "recycling" : "trash"
                  }`}
        </StyledBin>
    );
};

export default Bin;

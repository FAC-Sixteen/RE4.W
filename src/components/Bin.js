import React from "react";
import { useDrop } from "react-dnd";

const style = {
    height: "12rem",
    width: "12rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    padding: "1rem",
    border: "1px solid gray",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "normal",
    float: "left",
};

const Bin = ({ accept, onDrop }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: monitor => ({
            isOver: monitor.isOver(),
            conDrop: monitor.canDrop(),
        }),
    });
    const isActive = isOver && canDrop;
    return (
        <div ref={drop} style={Object.assign({}, style)}>
            {isActive ? "Release to drop" : `This bin accepts ${accept}`}
        </div>
    );
};

export default Bin;

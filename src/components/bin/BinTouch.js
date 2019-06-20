import React from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";
import StyledBin from "./Bin.style";
import TrashBin from "../../assets/TrashBin.png";
import RecyclingBin from "../../assets/RecyclingBin.png";

const dragTarget = {
    drop(props, monitor, component) {
        const droppedItem = monitor.getItem();
        console.log("dropped", droppedItem);
        props.handleDrop(droppedItem.item, props.name);
    },
};

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    };
};

const BinTouch = props => {
    const { connectDropTarget, name, correctBin, wrongBin } = props;
    return connectDropTarget(
        <div>
            <StyledBin
                src={name === "recyclingBin" ? RecyclingBin : TrashBin}
                alt={name === "recyclingBin" ? "Recycling Bin" : "Trash Bin"}
                name={name}
                correctBin={correctBin}
                wrongBin={wrongBin}
            ></StyledBin>
        </div>
    );
};

BinTouch.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
};

export default DropTarget("draggable-item", dragTarget, collect)(BinTouch);

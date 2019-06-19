import React from "react";
import PropTypes from "prop-types";
import { DropTarget, useDrop } from "react-dnd";
import StyledBin from "./Bin.style";

const dragTarget = {
    drop(props, monitor, component) {
        const droppedItem = monitor.getItem();
        console.log("dropped on target", droppedItem);
        props.handleDrop(droppedItem.item, props.name);
    },
};

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    };
};

const BinTouch = props => {
    const { connectDropTarget } = props;

    return connectDropTarget(
        <div>
            <StyledBin />
        </div>
    );
};

BinTouch.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
};

export default DropTarget("draggable-item", dragTarget, collect)(BinTouch);

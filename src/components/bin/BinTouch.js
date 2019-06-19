import React from "react";
import PropTypes from "prop-types";
import { DropTarget, useDrop } from "react-dnd";
import StyledBin from "./Bin.style";

const dragTarget = {
    drop(props, monitor, component) {
        const droppedItem = monitor.getItem();
        console.log("dropped on target", droppedItem);
    },
};

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    };
};

const BinTouch = props => {
    const { connectDropTarget } = props;
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: props.accept,
        drop: props.onDrop,
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
    const isActive = isOver && canDrop;

    return connectDropTarget(
        <div>
            <StyledBin ref={drop}>
                {isActive
                    ? "Release to drop"
                    : `This bin accepts ${
                          props.name === "recyclingBin" ? "recycling" : "trash"
                      }`}
            </StyledBin>
        </div>
    );
};

BinTouch.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
};

export default DropTarget("draggable-item", dragTarget, collect)(BinTouch);

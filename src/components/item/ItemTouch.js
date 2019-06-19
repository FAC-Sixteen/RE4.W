import React from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import DragPreview from "../game/DragLayer";

const dragSource = {
    beginDrag(props) {
        return props;
    },
};

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    };
};

const ItemTouch = props => {
    const { connectDragSource, item } = props;

    return connectDragSource(
        item.dropped ? null : (
            <div className="source">
                <DragPreview {...props} />
            </div>
        )
    );
};

ItemTouch.propTypes = {
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
};

export default DragSource("draggable-item", dragSource, collect)(ItemTouch);

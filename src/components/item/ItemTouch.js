import React from "react";
import PropTypes from "prop-types";
import { DragSource, useDrag } from "react-dnd";
import DragPreview from "../game/DragLayer";
import DragItem from "./item.style";

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
    const { connectDragSource } = props;

    const [{ opacity }, drag] = useDrag({
        item: props.item,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0 : 1,
        }),
    });

    return connectDragSource(
        props.item.dropped ? null : (
            <div className="source">
                <DragPreview {...props} />
                {/* <DragItem
                    ref={drag}
                    src={props.item.Image}
                    alt={props.item.itemName}
                    opacity={opacity}
                    onLoad={props.handleImageLoad}
                    onError={props.handleImageError}
                /> */}
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

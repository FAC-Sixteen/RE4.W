import React from "react";
import PropTypes from "prop-types";
import { DragLayer } from "react-dnd";

import DragItem from "./item.style";

const collect = monitor => {
    return {
        sourceOffset: monitor.getSourceClientOffset(),
    };
};

const DragPreview = props => {
    const getLayerStyles = () => {
        const { sourceOffset } = props;

        return sourceOffset
            ? `translate(${sourceOffset.x}px, ${sourceOffset.y}px)`
            : null;
    };

    const transform = getLayerStyles();
    console.log(transform);

    const { isDragging } = props;
    // if (!isDragging) {
    //     return null;
    // }

    return (
        <DragItem
            className="dragging"
            ref={props.drag}
            src={props.item.Image}
            alt={props.item.itemName}
            onLoad={props.handleImageLoad}
            onError={props.handleImageError}
            transform={transform}
        />
    );
};

DragPreview.propTypes = {
    isDragging: PropTypes.bool,
    sourceOffset: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }),
};

export default DragLayer(collect)(DragPreview);

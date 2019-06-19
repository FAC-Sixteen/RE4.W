import React from "react";
import PropTypes from "prop-types";
import { DragLayer } from "react-dnd";

import DragItem from "../item/item.style";

const collect = monitor => {
    return {
        sourceOffset: monitor.getSourceClientOffset(),
    };
};

const DragPreview = props => {
    const getLayerStyles = () => {
        const { sourceOffset } = props;

        return {
            transform: sourceOffset
                ? `translate(${sourceOffset.x}px, ${sourceOffset.y}px)`
                : "",
        };
    };

    const transform = getLayerStyles();

    const { isDragging } = props;
    if (isDragging) {
        return (
            <div>
                <DragItem
                    style={transform}
                    className="dragging"
                    ref={props.drag}
                    src={props.item.Image}
                    alt={props.item.itemName}
                    onLoad={props.handleImageLoad}
                    onError={props.handleImageError}
                    transform={transform}
                />
            </div>
        );
    }

    return (
        <div>
            <DragItem
                className="dragging"
                ref={props.drag}
                src={props.item.Image}
                alt={props.item.itemName}
                onLoad={props.handleImageLoad}
                onError={props.handleImageError}
                transform={transform}
            />
        </div>
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

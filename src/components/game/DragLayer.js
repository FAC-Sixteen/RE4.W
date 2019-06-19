import React from "react";
import PropTypes from "prop-types";
import { DragLayer } from "react-dnd";

import { DragItem, ItemText, IndividualItem } from "../item/item.style";

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
                <IndividualItem>
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
                </IndividualItem>
                <ItemText>{props.item.Category}</ItemText>
            </div>
        );
    }

    return (
        <div>
            <IndividualItem>
                <DragItem
                    className="dragging"
                    ref={props.drag}
                    src={props.item.Image}
                    alt={props.item.itemName}
                    onLoad={props.handleImageLoad}
                    onError={props.handleImageError}
                    transform={transform}
                />
            </IndividualItem>
            <ItemText>{props.item.Category}</ItemText>
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

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

        return {
            transform: sourceOffset
                ? `translate(${sourceOffset.x}px, ${sourceOffset.y}px)`
                : "",
        };
    };

    const { isDragging } = props;
    // if (!isDragging) {
    //     return null;
    // }

    return (
        <div className="source-preview" style={getLayerStyles()}>
            {props.children}
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

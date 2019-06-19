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
    const [dragStart, setDragStart] = React.useState(0);
    const { sourceOffset } = props;

    React.useEffect(() => {
        if (dragStart === 0 && sourceOffset !== null) {
            setDragStart(sourceOffset);
        } else if (sourceOffset === null) {
            setDragStart(0);
        }
    }, [sourceOffset, dragStart]);

    const getLayerStyles = () => {
        console.log(sourceOffset, dragStart);
        return {
            transform: sourceOffset
                ? `translate(${sourceOffset.x -
                      dragStart.x}px, ${sourceOffset.y - dragStart.y}px)`
                : "",
        };
    };

    const transform = getLayerStyles();
    console.log(transform);

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

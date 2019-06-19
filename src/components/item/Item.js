import React from "react";
import { useDrag } from "react-dnd";
import DragItem from "./item.style";
import DragPreview from "./DragLayer";

const Item = ({ item, handleImageLoad, handleImageError }) => {
    const [{ opacity }, drag] = useDrag({
        item,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0 : 1,
        }),
    });
    return (
        <DragPreview>
            {item.dropped ? null : (
                <DragItem
                    ref={drag}
                    src={item.Image}
                    alt={item.itemName}
                    opacity={opacity}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />
            )}
        </DragPreview>
    );
};

export default Item;

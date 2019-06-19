import React from "react";
import { useDrag } from "react-dnd";
import DragItem from "./item.style";
import DragPreview from "../game/DragLayer";

const Item = ({ item, handleImageLoad, handleImageError }) => {
    const [{ opacity }, drag] = useDrag({
        item,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0 : 1,
        }),
    });
    return item.dropped ? null : (
        <div>
            <DragPreview
                drag={drag}
                item={item}
                handleImageLoad={handleImageLoad}
                handleImageError={handleImageError}
            />
            <DragItem
                ref={drag}
                src={item.Image}
                alt={item.itemName}
                opacity={opacity}
                onLoad={handleImageLoad}
                onError={handleImageError}
            />
        </div>
    );
};

export default Item;

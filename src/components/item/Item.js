import React from "react";
import { useDrag } from "react-dnd";
import { DragItem, ItemText, IndividualItem } from "./item.style";

const Item = ({ item, handleImageLoad, handleImageError }) => {
    const [{ opacity }, drag] = useDrag({
        item,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0 : 1,
        }),
    });
    return (
        <React.Fragment>
            {item.dropped ? null : (
                <IndividualItem>
                    <DragItem
                        ref={drag}
                        src={item.Image}
                        alt={item.itemName}
                        opacity={opacity}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                    <ItemText>{item.Category}</ItemText>
                </IndividualItem>
            )}
        </React.Fragment>
    );
};

export default Item;

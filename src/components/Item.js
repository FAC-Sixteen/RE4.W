import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";

const style = {
    width: "100px",
    height: "100px",
    border: "1px dashed gray",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    cursor: "move",
    float: "left",
};

const ItemImg = styled.img`
    max-width: 100px;
`;

const Item = ({ itemName, type, Image, isDropped }) => {
    const [{ opacity }, drag] = useDrag({
        item: { itemName, type },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0 : 1,
        }),
    });
    return (
        <div>
            {isDropped ? null : (
                <div ref={drag} style={Object.assign({}, style, { opacity })}>
                    <ItemImg src={Image} alt={itemName} />
                </div>
            )}
        </div>
    );
};

export default Item;

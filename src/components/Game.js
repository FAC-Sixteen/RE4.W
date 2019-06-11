import React from "react";

import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
//components
import Bin from "./Bin";
import Item from "./Item";
import ItemTypes from "./ItemTypes";

const items = [
    {
        fields: {
            Item: "Coca Cola",
            Recycle: "Yes",
            Category: "Soft Drink",
            Bin: "Cans are very easy to recycle and go in your bin at home.",
            Tip:
                "Last year in the UK, we recycled 4.5 billion aluminium cans. Thats enough to reach around the world 13 times!",
            Image:
                "https://www.dropbox.com/s/dwjvp30c21ve3dt/cocacola_can.png?dl=0",
        },
    },
    {
        fields: {
            Item: "Walkers",
            Recycle: "No",
            Category: "Crisp packet",
            Bin:
                "Crisp packets can't be recycled, so put them in the normal bin",
            Tip:
                "Together, thats enough to reach twice the height of the worlds tallest building!",
            Image:
                "https://www.dropbox.com/s/hcxdv4af86zo2qa/Crisp-packet-walkers.png?dl=0",
        },
    },
];

const Game = () => {
    const [bins, setBins] = React.useState([
        { accepts: [ItemTypes.TRASH] },
        { accepts: [ItemTypes.RECYLEABLE] },
    ]);

    const [itemCheck, setItemCheck] = React.useState(
        items.map(item => ({
            name: `${item.fields.Item} ${item.fields.Category}`,
            type:
                item.fields.Recycle === "Yes"
                    ? ItemTypes.RECYLEABLE
                    : ItemTypes.TRASH,
        }))
    );

    const [droppedBoxNames, setDroppedBoxNames] = React.useState([]);
    const isDropped = boxName => {
        console.log("something was dropped");
        return droppedBoxNames.indexOf(boxName) > -1;
    };

    const handleDrop = React.useCallback(
        (index, item) => {
            const { name } = item;
            setDroppedBoxNames(droppedBoxNames.concat([name]));
        },
        [droppedBoxNames]
    );
    return (
        <div>
            <div>
                {bins.map(({ accepts }, index) => {
                    console.log("accepts", accepts[0]);
                    return (
                        <Bin
                            accept={accepts[0]}
                            onDrop={item => handleDrop(index, item)}
                            key={index}
                        />
                    );
                })}
            </div>
            <div>
                {itemCheck.map(({ name, type }, index) => (
                    <Item
                        name={name}
                        type={type}
                        isDropped={isDropped(name)}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default DragDropContext(HTML5Backend)(Game);

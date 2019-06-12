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
        { name: "trashBin", accepts: [ItemTypes.TRASH, ItemTypes.RECYCLEABLE] },
        {
            name: "recyclingBin",
            accepts: [ItemTypes.TRASH, ItemTypes.RECYCLEABLE],
        },
    ]);

    const [itemCheck, setItemCheck] = React.useState(
        items.map(item => ({
            name: `${item.fields.Item} ${item.fields.Category}`,
            type:
                item.fields.Recycle === "Yes"
                    ? ItemTypes.RECYCLEABLE
                    : ItemTypes.TRASH,
        }))
    );

    const [droppedTrashItems, setDroppedTrashItems] = React.useState([]);
    const [droppedRecycledItems, setDroppedRecycledItems] = React.useState([]);

    const isDropped = itemName => {
        console.log("droppedTRASH", droppedTrashItems);
        console.log("droppedRECYCLED", droppedRecycledItems);

        return (
            droppedTrashItems.indexOf(itemName) > -1 ||
            droppedRecycledItems.indexOf(itemName) > -1
        );
    };

    const handleDrop = React.useCallback(
        (item, binName) => {
            console.log("binName", binName);
            const { name, type } = item;
            if (binName === "trashBin") {
                type === ItemTypes.TRASH ? alert("correct") : alert("wrong");
                setDroppedTrashItems(droppedTrashItems.concat([name]));
            } else {
                type === ItemTypes.RECYCLEABLE
                    ? alert("correct")
                    : alert("wrong");
                setDroppedRecycledItems(droppedRecycledItems.concat([name]));
            }
        },
        [droppedTrashItems, droppedRecycledItems]
    );

    return (
        <div>
            <div>
                {bins.map(({ name, accepts }, index) => {
                    return (
                        <Bin
                            accept={accepts}
                            onDrop={item => handleDrop(item, name)}
                            key={index}
                            name={name}
                        />
                    );
                })}
            </div>

            <div>
                {itemCheck.map(({ name, type }, index) => {
                    return (
                        <Item
                            name={name}
                            type={type}
                            isDropped={isDropped(name)}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default DragDropContext(HTML5Backend)(Game);

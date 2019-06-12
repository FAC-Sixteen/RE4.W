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
    const [score, setScore] = React.useState(0);
    const [time, setTime] = React.useState(3);
    const [correctItems, setCorrectItems] = React.useState([]);
    const [wrongItems, setWrongItems] = React.useState([]);
    const [droppedTrashItems, setDroppedTrashItems] = React.useState([]);
    const [droppedRecycledItems, setDroppedRecycledItems] = React.useState([]);
    const [droppedTotalItems, setDroppedTotalItems] = React.useState([]);

    const [itemCheck] = React.useState(
        items.map(item => ({
            name: `${item.fields.Item} ${item.fields.Category}`,
            type:
                item.fields.Recycle === "Yes"
                    ? ItemTypes.RECYCLEABLE
                    : ItemTypes.TRASH
        }))
    );

    React.useEffect(() => {
        const intervalId = window.setInterval(interval, 1000);
        return () => window.clearInterval(intervalId);
    }, [])

    React.useEffect(() => {
        if (droppedTotalItems.length === itemCheck.length || time <= 0) {
            alert('Game over');
        }
    }, [droppedTotalItems, itemCheck, time])

    const interval = () => setTime(oldTime => oldTime <= 0 ? 0 : oldTime - 1);
    
    const [bins] = React.useState([
        { name: "trashBin", accepts: [ItemTypes.TRASH, ItemTypes.RECYCLEABLE] },
        {
            name: "recyclingBin",
            accepts: [ItemTypes.TRASH, ItemTypes.RECYCLEABLE]

            // We could refactor this code at some point to have 'dropped?' and 'correct bin?' properties, 
            // rather than have five different states to represent this. 
        },
    ]);

    

    const isDropped = (itemName, index) => {
        return (
            droppedTrashItems.indexOf(itemName) > -1 ||
            droppedRecycledItems.indexOf(itemName) > -1
        );
    };

    const handleDrop = React.useCallback(
        (item, binName) => {
            const { name, type } = item;

            if (binName === "trashBin") {
                type === ItemTypes.TRASH 
                    ? handleCorrect(name)
                    : handleWrong(name);
                setDroppedTrashItems(droppedTrashItems.concat([name]));
                setDroppedTotalItems(droppedTotalItems.concat([name]));

            } else {
                type === ItemTypes.RECYCLEABLE
                    ? handleCorrect(name)
                    : handleWrong(name);
                setDroppedRecycledItems(droppedRecycledItems.concat([name]));
                setDroppedTotalItems(droppedTotalItems.concat([name]));
            }
        },
        [droppedRecycledItems, droppedTrashItems, droppedTotalItems]
    );


    const handleCorrect = (name) => {
        alert('correct');
        setScore(oldScore => oldScore + 1);
        setCorrectItems(correctItems.concat([name]));
    }

    const handleWrong = (name) => {
        alert('wrong');
        setWrongItems(wrongItems.concat([name]));
    }

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

            <p>
                Score: {score}
            </p>
            <p>
                Time: {time}
            </p>

            <div>
                {itemCheck.map(({ name, type }, index) => {
                    return (
                        <Item
                            name={name}
                            type={type}
                            isDropped={isDropped(name, index)}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default DragDropContext(HTML5Backend)(Game);

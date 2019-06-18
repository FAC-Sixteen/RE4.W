import React from "react";
import { Link } from "react-router-dom";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
//components
import Bin from "./Bin";
import Item from "./Item";
import ItemTypes from "./ItemTypes";
import formatData from "../utils/formatData";

const Game = props => {
    const [score, setScore] = React.useState(0);
    const [time, setTime] = React.useState(10);
    const [correctItems, setCorrectItems] = React.useState([]);
    const [wrongItems, setWrongItems] = React.useState([]);
    const [droppedTrashItems, setDroppedTrashItems] = React.useState([]);
    const [droppedRecycledItems, setDroppedRecycledItems] = React.useState([]);
    const [droppedTotalItems, setDroppedTotalItems] = React.useState([]);
    const [gameOver, setGameOver] = React.useState(false);

    const [data, setData] = React.useState(props.location.data);
    console.log("data from game", data);

    const formattedData = formatData(data);

    React.useEffect(() => {
        const intervalId = window.setInterval(interval, 1000);
        return () => window.clearInterval(intervalId);
    }, []);

    React.useEffect(() => {
        if (droppedTotalItems.length === formattedData.length || time <= 0) {
            // alert("Game over");
            setGameOver(true);
        }
    }, [droppedTotalItems, formattedData, time]);

    const interval = () => setTime(oldTime => (oldTime <= 0 ? 0 : oldTime - 1));

    const [bins] = React.useState([
        {
            binName: "trashBin",
            accepts: [ItemTypes.TRASH, ItemTypes.RECYCLABLE],
        },
        {
            binName: "recyclingBin",
            accepts: [ItemTypes.TRASH, ItemTypes.RECYCLABLE],

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
        (formattedData, binName) => {
            const { itemName, type } = formattedData;

            if (binName === "trashBin") {
                type === ItemTypes.TRASH
                    ? handleCorrect(itemName)
                    : handleWrong(itemName);
                setDroppedTrashItems(droppedTrashItems.concat([itemName]));
                setDroppedTotalItems(droppedTotalItems.concat([itemName]));
            } else {
                type === ItemTypes.RECYCLABLE
                    ? handleCorrect(itemName)
                    : handleWrong(itemName);
                setDroppedRecycledItems(
                    droppedRecycledItems.concat([itemName])
                );
                setDroppedTotalItems(droppedTotalItems.concat([itemName]));
            }
        },
        [droppedRecycledItems, droppedTrashItems, droppedTotalItems]
    );

    const handleCorrect = itemName => {
        alert("correct");
        setScore(oldScore => oldScore + 1);
        setCorrectItems(correctItems.concat([itemName]));
    };

    const handleWrong = itemName => {
        alert("wrong");
        setWrongItems(wrongItems.concat([itemName]));
    };
    return (
        <div data-testid="game">
            <div>
                {bins.map(({ binName, accepts }, index) => {
                    return (
                        <Bin
                            accept={accepts}
                            onDrop={item => handleDrop(item, binName)}
                            key={index}
                            name={binName}
                        />
                    );
                })}
            </div>

            <p>Score: {score}</p>
            <p>Time: {time}</p>

            <div>
                {formattedData.map(({ itemName, type, Image }, index) => {
                    return (
                        <Item
                            itemName={itemName}
                            type={type}
                            Image={Image}
                            isDropped={isDropped(itemName, index)}
                            key={index}
                        />
                    );
                })}
            </div>
            {gameOver ? (
                <div>
                    GAME OVER GOOD JOB! <Link to="/factpage">End Game</Link>
                </div>
            ) : null}
        </div>
    );
};

export default DragDropContext(HTML5Backend)(Game);

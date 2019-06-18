import React from "react";

import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
//components
import Bin from "../bin/Bin";
import Item from "../item/Item";
import ItemTypes from "../../utils/ItemTypes";
import formatData from "../../utils/formatData";

const Game = ({ data }) => {
    const [score, setScore] = React.useState(0);
    const [time, setTime] = React.useState(300);
    const [items, setItems] = React.useState(formatData(data));
    const [active, setActive] = React.useState(false);
    const [images, setImages] = React.useState([]);

    const handleImageLoad = () => {
        setImages(images.concat(true));
        if (images.length === 9) setActive(true);
    };
    const handleImageError = () => {
        setImages(images.concat(false));
    };

    React.useEffect(() => {
        if (active) {
            const interval = () =>
                setTime(oldTime => (oldTime <= 0 ? 0 : oldTime - 1));
            const intervalId = window.setInterval(interval, 1000);
            return () => window.clearInterval(intervalId);
        } else return;
    }, [active]);

    React.useEffect(() => {
        if (items.every(item => item.dropped !== false) || time <= 0) {
            alert("Game over");
        }
    }, [items, time]);

    const [bins] = React.useState([
        {
            binName: "trashBin",
            accepts: [ItemTypes.TRASH, ItemTypes.RECYCLABLE],
        },
        {
            binName: "recyclingBin",
            accepts: [ItemTypes.TRASH, ItemTypes.RECYCLABLE],
        },
    ]);

    const handleDrop = React.useCallback(
        (item, bin) => {
            const { ID, correctBin } = item;
            setItems(
                items.map(currentItem => {
                    if (currentItem.ID === ID) {
                        currentItem.dropped = bin;
                        currentItem.correct = bin === correctBin;
                        return currentItem;
                    }
                    return currentItem;
                })
            );

            if (bin === correctBin) {
                alert("correct");
                setScore(oldScore => oldScore + 1);
            } else {
                alert("wrong");
            }
        },
        [items]
    );

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
                {items.map((item, index) => {
                    return (
                        <Item
                            item={item}
                            handleImageLoad={handleImageLoad}
                            handleImageError={handleImageError}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default DragDropContext(HTML5Backend)(Game);

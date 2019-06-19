import React from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";
//components
import Bin from "../bin/Bin";
import Item from "../item/Item";
import ItemTypes from "../../utils/ItemTypes";
import formatData from "../../utils/formatData";
import Header from "../header/Header";
import Main from "../main/Main";
import {
    GameFlex,
    ItemContainer,
    TopContainer,
    ScoreText,
    ExplainText,
} from "./Game.style";

const Game = ({ data }) => {
    const [score, setScore] = React.useState(0);
    const [time, setTime] = React.useState(300);
    const [items, setItems] = React.useState(formatData(data));
    const [showModal, setShowModal] = React.useState(false);
    const [active, setActive] = React.useState(false);
    const [images, setImages] = React.useState([]);

    const handleImageLoad = () => {
        setImages(images.concat(true));
        if (images.length === 5) setActive(true);
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
            setShowModal(true);
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
            <Header text="Game" />
            <Main>
                <GameFlex>
                    <TopContainer>
                        <ScoreText>Score: {score}</ScoreText>
                        <ExplainText>
                            Drag and drop the trash into the right bin!
                        </ExplainText>
                        <ScoreText>Time: {time}</ScoreText>
                    </TopContainer>

                    <ItemContainer>
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
                    </ItemContainer>

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
                </GameFlex>

                <ReactModal
                    isOpen={showModal}
                    style={{
                        overlay: {
                            width: "50vw",
                            height: "50vh",
                            margin: "auto",
                            backgroundColor: "green",
                        },
                        content: { border: "none" },
                    }}
                >
                    GAME OVER GOOD JOB!{" "}
                    <Link
                        to={{
                            pathname: "/factpage",
                            data: items,
                            score: score,
                        }}
                    >
                        End Game
                    </Link>
                </ReactModal>
            </Main>
        </div>
    );
};

const DesktopGame = DragDropContext(HTML5Backend)(Game);
const TouchGame = DragDropContext(TouchBackend)(Game);

export { DesktopGame, TouchGame };

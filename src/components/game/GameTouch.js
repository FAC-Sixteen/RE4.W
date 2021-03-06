import React from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { DragDropContext } from "react-dnd";
import TouchBackend from "react-dnd-touch-backend";
//components
import BinTouch from "../bin/BinTouch";
import ItemTouch from "../item/ItemTouch";
import ItemTypes from "../../utils/ItemTypes";
import formatData from "../../utils/formatData";
import Header from "../header/Header";
import {
    GameFlex,
    ItemContainer,
    TopContainer,
    ScoreText,
    ExplainText,
    BinContainer,
    Overlay,
} from "./Game.style";
import Background from "../Background.style";
import Bubble from "../../assets/ScoreBubble.png";
import { SmallButton } from "../button/Button";

const Game = ({ data }) => {
    const [score, setScore] = React.useState(0);
    const [time, setTime] = React.useState(20);
    const [items, setItems] = React.useState(formatData(data));
    const [showModal, setShowModal] = React.useState(false);
    const [active, setActive] = React.useState(false);
    const [images, setImages] = React.useState([]);
    const [correctBin, setCorrectBin] = React.useState(null);
    const [wrongBin, setWrongBin] = React.useState(null);

    const handleImageLoad = () => {
        setImages(images.concat(true));
        if (images.length === items.length - 1) setActive(true);
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
                setCorrectBin(bin);
                setWrongBin(null);
                setScore(oldScore => oldScore + 1);
            } else {
                setWrongBin(bin);
                setCorrectBin(null);
            }
        },
        [items]
    );

    return (
        <div data-testid="game">
            <Header text="Game" />
            <Background>
                {active === false ? <Overlay /> : null}
                <GameFlex>
                    <TopContainer>
                        <ScoreText>
                            Score:<br></br>
                            {score}
                        </ScoreText>
                        <ExplainText>
                            {active === false
                                ? "Loading..."
                                : "Drag and drop the trash into the right bin!"}
                        </ExplainText>
                        <ScoreText>
                            Time:<br></br>
                            {time}
                        </ScoreText>
                    </TopContainer>

                    <ItemContainer>
                        {items.map((item, index) => {
                            return (
                                <ItemTouch
                                    item={item}
                                    handleImageLoad={handleImageLoad}
                                    handleImageError={handleImageError}
                                    key={index}
                                />
                            );
                        })}
                    </ItemContainer>

                    <BinContainer>
                        {bins.map(({ binName, accepts }, index) => {
                            return (
                                <BinTouch
                                    accept={accepts}
                                    handleDrop={handleDrop}
                                    correctBin={correctBin}
                                    wrongBin={wrongBin}
                                    key={index}
                                    name={binName}
                                />
                            );
                        })}
                    </BinContainer>
                </GameFlex>

                <ReactModal
                    isOpen={showModal}
                    style={{
                        overlay: {
                            width: "100vw",
                            height: "100vh",
                            backgroundColor: "rgba(225,225,225,0.5)",
                            position: "relative",
                        },
                        content: {
                            width: "62vw",
                            height: "50vw",
                            border: "none",
                            backgroundImage: `url(${Bubble})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: "transparent",
                            margin: "auto",
                        },
                    }}
                >
                    <ExplainText>
                        GAME OVER <br></br>GOOD JOB!<br></br>
                        <Link
                            to={{
                                pathname: "/factpage",
                                data: items,
                                score: score,
                            }}
                        >
                            <SmallButton>End Game</SmallButton>
                        </Link>
                    </ExplainText>
                </ReactModal>
            </Background>
        </div>
    );
};

const TouchGame = DragDropContext(TouchBackend({ enableMouseEvents: true }))(
    Game
);

export default TouchGame;

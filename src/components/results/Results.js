import React from "react";
import DragItem from "../item/item.style";
import { SmallButton } from "../button/Button";
import { Link } from "react-router-dom";

const Results = ({ location: { score, items } }) => {
    const incorrectItems = items.filter(item => !item.correct);
    const [display, setDisplay] = React.useState(false);
    const [fact, setFact] = React.useState("");

    const displayFact = i => {
        setDisplay(!display);
        setFact(incorrectItems[i].Fact);
    };

    return (
        <React.Fragment>
            <div>Results Page</div>

            <p>You missed a few! Click the Items to see some recycling tips.</p>
            {incorrectItems.map((item, i) => (
                <div key={i} onClick={() => displayFact(i)}>
                    <DragItem src={item.Image} alt={item.Category} />
                    <p>{item.Category}</p>
                </div>
            ))}
            {display ? <p>{fact}</p> : null}
            <div>Your score is {score}!</div>
            <Link to="/">
                <SmallButton>Play Again</SmallButton>
            </Link>
        </React.Fragment>
    );
};

export default Results;

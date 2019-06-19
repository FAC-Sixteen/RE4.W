import styled from "styled-components";

const DragItem = styled.img`
    object-fit: contain;
    width: 8em;
    height: 8em;
    backgroundcolor: white;
    padding: 0.5rem 1rem;
    cursor: move;
    float: left;
    opacity: ${props => props.opacity};
    transform: ${props => props.transform || props.transform};
    @media only screen and (max-width: 768px) {
        width: 4rem;
        height: 4rem;
        padding: 0.25rem 0.5rem;
    }
`;

const ItemText = styled.p`
    font-family: Bangers;
    font-size: 1.5em;
    text-align: center;
    margin: 0;
    padding: 0;
    width: 8em;
    @media only screen and (max-width: 768px) {
        font-size: 1em;
    }
`;

const IndividualItem = styled.div`
    width: auto;
    margin: 0 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    marginright: 1.5rem;
    marginbottom: 1.5rem;
    @media only screen and (max-width: 768px) {
        margin: 0 0.5em;
    }
`;

export { DragItem, ItemText, IndividualItem };

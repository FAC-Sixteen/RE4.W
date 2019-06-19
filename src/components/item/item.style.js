import styled from "styled-components";

const DragItem = styled.img`
    object-fit: contain;
    width: 8em;
    height: 8em;
    border: 1px dashed gray;
    backgroundcolor: white;
    padding: 0.5rem 1rem;
    cursor: move;
    float: left;
    opacity: ${props => props.opacity};
`;

const ItemText = styled.p`
    font-family: Bangers;
    font-size: 1.5em;
    text-align: center;
    margin: 0;
    padding: 0;
    width: 8em;
`;

const IndividualItem = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    marginright: 1.5rem;
    marginbottom: 1.5rem;
`;

export { DragItem, ItemText, IndividualItem };

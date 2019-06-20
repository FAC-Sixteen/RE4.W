import styled from "styled-components";

const DragItem = styled.img`
    object-fit: contain;
    width: 6em;
    height: 6em;
    padding: 0.5rem 1rem;
    cursor: move;
    float: left;
    opacity: ${props => props.opacity};
    transform: ${props => props.transform || props.transform};
    @media only screen and (max-device-width: 480px) {
        width: 5rem;
        height: 4rem;
        padding: 0.25rem 0.5rem;
    }
    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 10rem;
        height: 10rem;
    }
`;

const ItemText = styled.p`
    font-family: Bangers;
    font-size: 1.5em;
    text-align: center;
    margin: 0;
    padding: 0;
    @media only screen and (max-device-width: 480px) {
        font-size: 0.8em;
    }
`;

const IndividualItem = styled.div`
    width: auto;
    margin: 0 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media only screen and (max-device-width: 480px) {
        margin: 0 0.5em;
    }
    @media only screen and (max-device-width: 768px) {
    }
`;

export { DragItem, ItemText, IndividualItem };

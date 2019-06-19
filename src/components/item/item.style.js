import styled from "styled-components";

const DragItem = styled.img`
    max-width: 100px;
    object-fit: contain;
    width: 100px;
    height: 100px;
    border: 1px dashed gray;
    backgroundcolor: white;
    padding: 0.5rem 1rem;
    marginright: 1.5rem;
    marginbottom: 1.5rem;
    cursor: move;
    float: left;
    opacity: ${props => props.opacity};
    transform: ${props => props.transform || props.transform};
`;

export default DragItem;

import styled from "styled-components";

const StyledBin = styled.img`
    height: 12rem;
    width: 12rem;
    object-fit: contain;
    marginright: 1.5rem;
    marginbottom: 1.5rem;
    padding-top: 1rem;

    @media only screen and (max-width: 768px) {
        height: 6rem;
        width: 6rem;
        padding-top: 0.5rem;
    }
`;

export default StyledBin;

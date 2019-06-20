import styled from "styled-components";

const StyledBin = styled.img`
    height: 8rem;
    width: 8rem;
    object-fit: contain;
    marginright: 1.5rem;
    marginbottom: 1.5rem;
    padding: 1rem 0rem;

    ${props => {
        if (props.name === "recyclingBin") {
            if (props.correctBin === "recyclingBin") {
                return "border-bottom: 0.5rem solid green";
            } else if (props.wrongBin === "recyclingBin") {
                return "border-bottom: 0.5rem solid red";
            } else return null;
        } else if (props.name === "trashBin") {
            if (props.correctBin === "trashBin") {
                return "border-bottom: 0.5rem solid green";
            } else if (props.wrongBin === "trashBin") {
                return "border-bottom: 0.5rem solid red";
            } else return null;
        }
    }};

    @media only screen and (max-device-width: 480px) {
        height: 6rem;
        width: 6rem;
        padding: 0.5rem 0rem;
    }

    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 10rem;
        width: 10rem;
        padding: 1rem 0rem;
    }
`;

export default StyledBin;

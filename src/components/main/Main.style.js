import styled from "styled-components";

const StyledMain = styled.main`
    margin-top: 8rem;
    height: calc(100vh-8rem);

    @media only screen and (max-width: 768px) {
        margin-top: 4rem;
        height: calc(100vh-4rem);
    }
`;

export default StyledMain;

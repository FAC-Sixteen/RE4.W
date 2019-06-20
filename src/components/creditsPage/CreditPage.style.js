import styled from "styled-components";

import ComicBackground from "../../assets/comic-bg7.jpg";

const StyledCreditsPage = styled.div`
    background-image: url(${ComicBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    top: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export { StyledCreditsPage };

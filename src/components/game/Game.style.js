import styled from "styled-components";
import styledMain from "../main/Main.style";

const GameFlex = styled(styledMain)`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
`;

export { GameFlex, ItemContainer };

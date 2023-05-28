import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "header header"    
    "content content"
    "content content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
    }
    a {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Content = styled.div`

    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;
    
    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }

`;

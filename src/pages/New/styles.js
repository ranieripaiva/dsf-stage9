import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;    

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        margin-top: 40px;
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        gap: 10px;
        background-color: ${({theme}) => theme.COLORS.BLACK};
        padding: 15px;


    }

    .inputs {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        margin-bottom: 40px;
    }

    .buttons{
        display: flex;
        justify-content: space-between;
        gap: 40px;
        margin-bottom: 40px;        
    }

`;

export const Form = styled.form`
    width: 93%;
    margin-left: 60px ;

    > header {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        line-height: 44px;
        margin-bottom: 36px;

        a {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        span{
            margin-left: 8px;
        };
    }
`;

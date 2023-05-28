import styled from "styled-components";
import { Link } from "react-router-dom";

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

`;

export const Search = styled.div`
    grid-area: search;
    padding: 64px 64px 0;
    
`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;
    
    
    > div {
        padding-top: 47px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        > h2 {
            
            border-bottom-color: ${({ theme })=> theme.COLORS.BACKGROUND_700};            
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 34px;
            font-weight: 400;      
        }

        > Button{
            width: 207px;
        }
    }
    
`;

export const NewNote = styled(Link)`
    
    width: 207px;
    background-color: ${({theme})=> theme.COLORS.PINK};;
    color: ${({theme})=> theme.COLORS.BACKGROUND_800};

    height: 56PX;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;
    
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 8px;
        width: 24px;
        height: 24px;
    }

`;
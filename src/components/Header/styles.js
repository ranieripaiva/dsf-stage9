import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`

    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGOUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 75px;
    
    > #rocket {
        
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        > h1 {
            font-size: 24px;
            color: ${({ theme }) => theme.COLORS.PINK};
            margin-right: 54px;
        }

    }
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 64px;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50px;
    }

    > div {   
        display: flex ;
        flex-direction: column;
        
        margin-right: 10px;
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100}
        }

        strong {            
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE}
        }
    }

    

`;


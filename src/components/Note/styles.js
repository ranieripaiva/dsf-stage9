import styled from "styled-components";
import estrela1 from "../../assets/star.svg";
import estrela2 from "../../assets/starfull.svg";
import estrela3 from "../../assets/Vector.png";


export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border:none ;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;    
    
    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
      
        color: ${({ theme })=> theme.COLORS.WHITE};
    }

    > p {

        margin-top: 15px;        
        text-align: justify;
        
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    > div {
        margin-top: 12px;
        display: flex;     

        align-items: center;
        text-align: center;
        gap: 6px;
        > h4 {
            
            margin-left: 10px;
            text-align: start;
            color: ${({ theme }) => theme.COLORS.WHITE}
        }
        > span { 
            display: flex;
            justify-content:space-between ;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }
    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;

export const Star = styled.img`
    flex: 1;
    background: url(${estrela3}) no-repeat center center;
    background-size: cover;
`;
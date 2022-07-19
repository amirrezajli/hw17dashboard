import styled from "styled-components";


export const NavToolsStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 20px;
height: auto;


div:nth-child(2){
    display: flex;
    align-items: center;
    gap: 15px;
    &:hover{
        cursor: pointer;
    }
    div{
        width: 110px;
        height: 35px;
        border: 1px solid silver;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content:space-evenly
    }
    div:nth-child(3){
        width: 140px;
        background-color: blue;
        color: white;
    }
    div:nth-child(2){
        justify-content :center !important ;
 }
}

`
import styled from "styled-components";


export const NavSearchStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 20px;
margin: 0 20px;
height: auto;
border-radius: 30px;
background-color: rgb(249,249,249);
svg:hover{
    cursor: pointer;
}


div:nth-child(2){
    display: flex;
    align-items: center;
    gap: 15px;
    
    div{
        width: 130px;
        height: 35px;
        border: 1px solid silver;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content:space-evenly

    }
    div:hover{
    cursor: pointer;

    }
    div:nth-child(4){
        width: 165px;
    }
}
`
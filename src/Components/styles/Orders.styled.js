import styled from "styled-components";


export const OrdersStyled = styled.div`
display:flex;
align-items: center;
gap:25px;
margin:30px 40px 0px 40px;
border-bottom: 1px solid silver;
div{
    height: 35px;
    transition: all 0.4 ease-in-out;
    &:hover{
        cursor: pointer;
        color: gray;
    }
}

div:nth-child(1){
    color: blue;
    border-bottom: 2px solid blue;
    span{
        background-color: orange;
    }
}
span{
    width: 20px;
    height: 10px;
    margin-left: 10px;
    background-color: silver;
    color: white;
    padding: 2px;
    border-radius: 5px;
    
}

`
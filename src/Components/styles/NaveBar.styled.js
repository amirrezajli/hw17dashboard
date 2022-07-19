import styled from "styled-components";

export const NaveBarstyled = styled.div`

padding: 20px 30px;
display: flex;
gap: 15px;
align-items: center;
font-size: 18px;
color: gray;

div:hover{
    cursor: pointer;
    color: blue;
}

div:nth-child(5){
    display: flex;
    padding-left: 10px;

    svg{
        padding-left: 15px;
    }
}
div:nth-child(4){
    display: flex;
    padding-left: 10px;

svg{
    padding-left: 15px;
}
}
div:nth-child(6){
color: blue;
}

`
import styled from "styled-components";


export const PageInationStyled = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 28px;
svg:hover{
    cursor: pointer;
}

span{
    padding: 8px 16px;
    &:hover{
        background-color: #ddd;
    }
}

p{
    color: gray;
}

`
export const Button = styled.button`
width:55px;
height:30px;
margin-left:10px;
border:1px solid silver;
border-radius:10px;
display:flex;
justify-content:space-around;
align-items:center;

`

export const Pgin = styled.div`
display:flex;
align-items:center;
`
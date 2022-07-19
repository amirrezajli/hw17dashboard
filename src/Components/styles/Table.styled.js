import styled from "styled-components";


export const TableStyled = styled.table`
    border-collapse: collapse;
    width: 98%;
    margin: 0 55px 0 10px;
    tbody tr:nth-child(3){
      box-shadow: 0px 2px 10px 2px silver;
      border-radius: 20px;
    }

    tbody tr:nth-child(1) , tr:nth-child(8) td:nth-child(5) {
     span{
      padding: 5px;
      margin-top: 11px;
      border-radius: 10px;
      border:none;
      background-color: rgb(253,212,212);
      color: red;
     }
    }
    tbody tr:nth-child(5) , tr:nth-child(2) td:nth-child(5) {
     span{
      padding: 5px;
      margin-top: 11px;
      border-radius: 10px;
      border:none;
      background-color: rgb(210,251,240);
      color: green;
     }
    }
    tbody tr:nth-child(3) td:nth-child(5) {
     span{
      padding: 5px;
      margin-top: 11px;
      border-radius: 10px;
      border:none;
      background-color: rgb(255,226,204);
      color: orange;
     }
    }
    tbody tr:nth-child(4) td:nth-child(5) {
     span{
      padding: 5px;
      margin-top: 11px;
      border-radius: 10px;
      border:none;
      background-color: rgb(204,216,255);
      color: blue;
     }
    }
    tbody tr:nth-child(6) td:nth-child(5) {
     span{
      padding: 5px;
      margin-top: 11px;
      border-radius: 10px;
      border:none;
      background-color: rgb(247,226,254);
      color: rgb(224,140,249);
     }
    }
    tbody tr:nth-child(7) , tr:nth-child(9) td:nth-child(5) {
     span{
      padding: 5px;
      margin-top: 11px;
      border-radius: 10px;
      border:none;
      background-color: rgb(232,232,234);
      color: black;
     }
    }
    tbody tr:nth-child(10) td:nth-child(5) {
     span{
      padding: 5px;
      margin-top: 11px;
      border-radius: 10px;
      border:none;
      background-color: rgb(254,204,230);
      color: rgb(250,0,130);
     }
    }
    tbody tr:nth-child(1) , tr:nth-child(2) , tr:nth-child(4) td:nth-child(6) {
     p{
      margin-top: 11px;
      color: blue;
     }
    }
    tbody tr:nth-child(3) , tr:nth-child(7) td:nth-child(6) {
     p{
      margin-top: 11px;
      color: gray;
     }
    }
    tbody tr:nth-child(6) , tr:nth-child(10) td:nth-child(6) {
     p{
      margin-top: 11px;
      color: red;
     }
    }
    tbody tr:nth-child(8) td:nth-child(6) {
     p{
      margin-top: 11px;
      color: green;
     }
    }
    tbody tr:nth-child(9) td:nth-child(6) {
     p{
      margin-top: 11px;
      color: orange;
     }
    }
  
  
td,th {
    padding: 8px;
  }
    
tr:hover {background-color: rgb(239,239,239);
}


  
th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: rgb(249,249,249);
    color: #808080;
    &:nth-child(7){
        svg{
          margin-right:5px;
        }
    }
    &:nth-child(8){
        svg{
          margin-right:5px;
        }
    }
    &:nth-child(9){
          svg{
            margin-right:5px;
          }
    }
}
`
export const BtnStyled = styled.button`
width: 80px;
height: 30px;
margin: 0 7px;
border-radius: 10px;
border:1px solid silver;
background-color: white;
color: blue;
`
export const BoldStyled = styled.td`
font-weight: bold;
font-size: 18px;
`

export const MutedStyled = styled.td`
    color: #808080;
`
export const Redtyled = styled.button`
/* width: 80px;
height: 25px;
margin-top: 11px;
border-radius: 10px;
border:none;
background-color: rgb(253,212,212);
color: red; */
`



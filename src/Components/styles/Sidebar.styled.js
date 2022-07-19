import styled from "styled-components";


export const SidebarStyled = styled.div`

    width: 6%;
    height: 100vh;
    position: fixed;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    gap: 12px;
    align-items: center;
    flex-direction: column;
    text-align: start;
    font-size: 16px;
    border-radius: 25px;
    box-shadow: 1px 1px 10px 1px silver;
   
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        color: gray;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        transition: all 0.3s ease-out;
        &:hover{
            color:Blue !important; 
            cursor: pointer;
            background-color: rgb(230,236,255);

        }
        
        &:nth-child(8){
            color:Blue !important; 
            background-color: rgb(230,236,255);
        }
       
    }
      
   
    div:nth-child(1){
        margin: 45px 0 25px 0 ;
    }
    

`

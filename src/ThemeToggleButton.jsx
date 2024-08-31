import React from 'react';
import styled from 'styled-components';
import {useTheme } from './Context';



const Button=styled.button`
   position:absolute;
   top:20px;
   right:20px;
   background-color:${({ theme }) => theme.buttonBackground};
   color:${({theme})=>theme.buttonColor};
   border:none;
   padding:10px 20px;
   font-size:1rem;
   cursor:pointer;
   border-radius:5px;
   transition:background-color 0.3s ease;
   &:hover{
       color:black;
       background-color:white;
   }
`;
const ThemeToggleButton=()=>{
    const{toggle}=useTheme();
    return(
        <Button onClick={toggle}>
            Change Theme
        </Button>
    );
};
export default ThemeToggleButton;
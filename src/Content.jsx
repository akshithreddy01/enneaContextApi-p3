import React from 'react';
import styled from 'styled-components';

const Wrapper=styled.div`
      position:relative;
      width:100vw;
      height:80vh;
       background-color: ${({ theme }) => theme.background};
       color: ${({ theme }) => theme.color};
        display: flex;
       align-items: center;
       justify-content: center;
       padding:20px;
       box-sizing: border-box; 
  @media (max-width: 768px) {
    padding: 10px;
    text-align: center; 
  }

  @media (max-width: 480px) {
    flex-direction: column; 
    padding: 5px;
  }
`;
const Content=()=>(
    <Wrapper>
        <div>
            <h1>Theme Toggle Application using Context API</h1>
            <p>Please click on the Change Theme Button on right Corner.<br/>Created a Counter using ContextAPI with add and remove Likes and styled using Styled Components. </p>
        </div>
    </Wrapper>
);
export default Content;
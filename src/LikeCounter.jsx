import React from 'react';
import styled from 'styled-components';
import { useTheme } from './Context';

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const LikeCounter = () => {
  const { likes, increaseLikes, decreaseLikes } = useTheme();

  return (
    <CounterWrapper>
      <Button onClick={increaseLikes}>Add Like</Button>
      <span>{likes} Likes</span>
      <Button onClick={decreaseLikes}>Remove Like</Button>
    </CounterWrapper>
  );
};

export default LikeCounter;

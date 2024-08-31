import React from 'react';
import { ThemeProvider } from './Context';
import ThemeToggleButton from './ThemeToggleButton';
import Content from './Content';
import LikeCounter from './LikeCounter';
function App() {

  return (
    
    <ThemeProvider>
    <Content />
    <LikeCounter />
    <ThemeToggleButton />
  </ThemeProvider>
  );
}

export default App;

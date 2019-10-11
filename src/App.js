import React from 'react';
import './App.css';
import Routes from './routes'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={{}}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;

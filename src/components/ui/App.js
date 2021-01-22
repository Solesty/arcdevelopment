import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
const { default: Header } = require("./Header");

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Header />
      Hello
    </ThemeProvider>
  );
}

export default App;

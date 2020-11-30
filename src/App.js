import React from 'react';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;

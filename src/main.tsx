import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { defaultTheme } from './styles/theme';
import { Routes } from './routes';
import { ContextProvider } from './contexts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
)

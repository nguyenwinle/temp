import { createGlobalStyle } from 'styled-components';

export const THEME = {
  actionsPanelHeight: '50px',
  colors: {
    black: '#000000',
    dark: '#013746',
    darker: '#01242e',
    error: '#f20000',
    filterBar: '#e8eef2',
    light: '#eff3f6',
    medium: '#8795A2',
    primary: {
      accent: '#2dadf7',
      dark: '#325bcf',
      darker: '#293845',
      light: '#6294ff',
      main: '#4d77f0',
    },
    secondary: {
      main: '#ff8c10',
    },
    white: '#ffffff',
  },
  headerHeight: '40px',
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#d8d8d8',
    placeholderColor: '#939393',
  },
  table: {
    body: {
      backgroundColor: '#ffffff',
      fontSize: 12,
      height: 31,
      textColor: '#000',
      treeRowBackgroundColor: '#f8f8f8',
    },
    borderColor: '#d8d8d8',
    header: {
      backgroundColor: '#ffffff',
      fontSize: '0.875rem',
      height: 50,
      sortBorder: '#000',
      textColor: '#484848',
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    background-color: ${THEME.colors.light};
    font-size: 0.875rem;
  }
`;

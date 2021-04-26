import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-smoothing: antialised;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Rubik', sans-serif;
  }
  html {
    font-size: 62.5%;
  }
`;

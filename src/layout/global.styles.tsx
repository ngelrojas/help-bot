import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0; }
  body {
    background: var(--gradient-5, linear-gradient(118deg, #9DF3FF 0%, #5394FC 36.62%, #5C58FD 64.89%, #8F49FE 87.87%));
    height: 100vh;
    margin: 0px;
    padding: 0px; 
  }
  main{
    margin: 0 auto;
    width: 100%;
  }
`;

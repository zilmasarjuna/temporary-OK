import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 14px;
  }
  
  @media (max-width: 900px) {
    html { font-size: 13px; }
  }
  
  @media (max-width: 400px) {
    html { font-size: 12px; }
  }
  

  body {
    font-family: 'OpenSans-Regular' ,'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  .pac-container {
    box-shadow: none;
    border: none;
    padding-top: 20px;
  }

  .pac-logo:after {
    background-image: none!important;
  }

  .pac-item {
    padding: 10px 0;
  }
`;

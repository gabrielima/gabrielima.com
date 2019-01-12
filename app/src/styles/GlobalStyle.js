import { createGlobalStyle } from 'styled-components'
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
    font: 112.5%/1.45em sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
    min-height: 100%;
    color: ${theme.colors.default};
  }

  svg path {
    fill: ${theme.colors.default};
  }
`;

export default GlobalStyle;
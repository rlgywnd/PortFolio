import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
    font-family: 'TheJamsil5Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
* {
    box-sizing: border-box;
    font-family: 'TheJamsil5Bold' !important;
    margin: 0;
    padding: 0;
  }
@font-face {
    font-family: 'NEXON Lv2 Gothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
body {
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor}
}
`;

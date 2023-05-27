import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
// import reset from 'styled-reset';
// index.js에 BrowserRouter로 <App/> 감싸줘야 라우팅 먹힘
// import { createGlobalStyle } from 'styled-components';
// import { ThemeProvider } from 'styled-components';
// import { darkTheme, lightTheme } from 'theme/theme';

// const GlobalStyle = createGlobalStyle`
// ${reset}
// @font-face {
//     font-family: 'TheJamsil5Bold';
//     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
//     font-weight: 700;
//     font-style: normal;
// }
// * {
//     box-sizing: border-box;
//     font-family: 'TheJamsil5Bold' !important;
//     margin: 0;
//     padding: 0;
//   }
// @font-face {
//     font-family: 'NEXON Lv2 Gothic';
//     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
//     font-weight: 400;
//     font-style: normal;
// }
// body {
//   background-color: ${(props) => props.theme.bgColor};
//   color: ${(props) => props.theme.textColor}
// }
// `;

const root = ReactDOM.createRoot(document.getElementById('root'));
// const isDark = localStorage.getItem('port_mode') ? true : false;
// useEffect(() => {
//   const isDark = localStorage.getItem('port_mode') ? true : false;
// })

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
      {/* <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle /> */}

      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

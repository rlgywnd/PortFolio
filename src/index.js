import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import reset from 'styled-reset';
// index.js에 BrowserRouter로 <App/> 감싸줘야 라우팅 먹힘
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
/* @font-face {
    font-family: 'KIMM_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KIMM_Bold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
* {
    box-sizing: border-box;
    font-family: 'KIMM_Bold' !important;
    margin: 0;
    padding: 0;
  } */
@font-face {
    font-family: 'NEXON Lv2 Gothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
/* @font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
* {
    box-sizing: border-box;
    font-family: 'LINESeedKR-Bd' !important;
    margin: 0;
    padding: 0;
  } */
  /* @font-face {
    font-family: 'BMHANNAAir';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/BMHANNAAir.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
* {
    box-sizing: border-box;
    font-family: 'BMHANNAAir' !important;
    margin: 0;
    padding: 0;
  } */
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

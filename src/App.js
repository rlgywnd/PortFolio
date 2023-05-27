import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Home from './pages';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'theme/theme';
import { GlobalStyle } from './theme/GlobalStyle';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { darkmode } from './recoil/darkmode';

function App() {
  const [isDark, setIsDark] = useRecoilState(darkmode);
  useEffect(() => {
    if (localStorage.getItem('port_mode')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [setIsDark]);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

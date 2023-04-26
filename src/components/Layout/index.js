import Footer from './Footer';
import Header from './Header';
import * as S from './style';
// import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import About from 'components/About';

const Layout = ({ children }) => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // console.log('window.scrollY : ', window.scrollY);
  // console.log('scrollPosition : ', scrollPosition);
  // useEffect(() => {
  //   setScrollPosition(window.scrollY);
  // }, [scrollPosition]);

  // AboutMe 1448
  // profile 1610
  // intro   2090
  // port  3045 ,3939, 5440, 6973, 8311, 9292, 9640, 9915(Studies 부분 다)

  return (
    <S.LayoutContainer id='top'>
      <Header />
      <About />
      <SideBar children={children} />
      <Footer />
    </S.LayoutContainer>
  );
};

export default Layout;

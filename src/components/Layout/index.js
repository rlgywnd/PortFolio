import Footer from './Footer';
import Header from './Header';
import * as S from './style';
import React from 'react';
import SideBar from './SideBar';
import About from 'components/About';

const Layout = ({ children }) => {
  console.log('children : ', children);

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

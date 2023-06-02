import Footer from './Footer';
import Header from './Header';
import * as S from './style';
import SideBar from './SideBar';
import About from 'components/About';
import { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // console.log('scrollPosition : ', scrollPosition);

  const onScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <S.LayoutContainer id='top'>
      <Header scrollposition={scrollPosition} />
      <About />
      <SideBar children={children} scrollposition={scrollPosition} />
      <Footer />
    </S.LayoutContainer>
  );
};

export default Layout;

import Footer from './Footer';
import Header from './Header';
import * as S from './style';

const Layout = ({ children }) => {
  return (
    <S.LayoutContainer>
      <Header />
      {children}
      <Footer />
    </S.LayoutContainer>
  );
};

export default Layout;

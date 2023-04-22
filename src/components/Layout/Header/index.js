import * as S from './style';
import { Link } from 'react-scroll';

const Header = () => {
  console.log('scrollTop() : ', window.scrollX);
  return (
    <S.HeaderContainer>
      <S.LeftDiv>
        <S.HomeBtn to={'/'}>PORTFOLIO</S.HomeBtn>
      </S.LeftDiv>
      <S.RightDiv>
        <div>
          <Link to='about_me' spy={true} smooth={true}>
            ABOUT
          </Link>
        </div>
        <div>
          <Link to='projects' spy={true} smooth={true}>
            PROJECTS
          </Link>
        </div>
        <div>EXPERIENCE</div>
        <div>ELSE</div>
        <S.Hamburger>=</S.Hamburger>
      </S.RightDiv>
    </S.HeaderContainer>
  );
};

export default Header;

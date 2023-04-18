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
          <Link to='about' spy={true} smooth={true}>
            ABOUT
          </Link>
        </div>
        <div>
          <Link to='skills' spy={true} smooth={true}>
            SKILLS
          </Link>
        </div>
        <div>PROJECTS</div>
        <div>EXPERIENCE</div>
        <div>ELSE</div>
        <S.Hamburger>=</S.Hamburger>
      </S.RightDiv>
    </S.HeaderContainer>
  );
};

export default Header;

import * as S from './style';
// import useMoveScroll from 'hooks/useMoveScroll';
import { Link } from 'react-scroll';

const Header = () => {
  // const { element, onMoveToElement } = useMoveScroll();

  return (
    <S.HeaderContainer>
      <S.RightDiv>
        <S.HomeBtn to={'/'}>PORTFOLIO</S.HomeBtn>
      </S.RightDiv>
      <S.LeftDiv>
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
      </S.LeftDiv>
    </S.HeaderContainer>
  );
};

export default Header;

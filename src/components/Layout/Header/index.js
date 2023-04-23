import * as S from './style';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';

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
        <div>
          <Link to='education' spy={true} smooth={true}>
            EDUCATION
          </Link>
        </div>
        <div>
          <Link to='career' spy={true} smooth={true}>
            CAREER
          </Link>
        </div>
        <div>
          <Link to='studies' spy={true} smooth={true}>
            STUDIES
          </Link>
        </div>
        <S.Hamburger>
          <GiHamburgerMenu size='25' />
        </S.Hamburger>
      </S.RightDiv>
    </S.HeaderContainer>
  );
};

export default Header;

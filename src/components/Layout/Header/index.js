import * as S from './style';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import { darkmode } from '../../../recoil/darkmode';

const Header = ({ scrollposition }) => {
  const [isDark, setIsDark] = useRecoilState(darkmode);

  const [hamburger, setHamburger] = useState(false);

  return (
    <S.HeaderContainer scrollposition={scrollposition}>
      <S.LeftDiv>
        <S.HomeBtn to={'/'} scrollposition={scrollposition}>
          PORTFOLIO
        </S.HomeBtn>
      </S.LeftDiv>
      <S.RightDiv scrollposition={scrollposition}>
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
        {hamburger ? (
          <S.HamburgerOpen scrollposition={scrollposition}>
            <div
              onClick={() => {
                setHamburger(!hamburger);
              }}
            >
              <IoIosArrowUp size='30' color='' />
            </div>
            <ul scrollposition={scrollposition}>
              <li>
                <Link to='about_me' spy={true} smooth={true}>
                  <h1 isdark={isDark}>ABOUT</h1>
                </Link>
              </li>
              <li>
                <Link to='projects' spy={true} smooth={true}>
                  <h1 isdark={isDark}>PROJECTS</h1>
                </Link>
              </li>
              <li>
                <Link to='education' spy={true} smooth={true}>
                  <h1 isdark={isDark}>EDUCATION</h1>
                </Link>
              </li>
              <li>
                <Link to='career' spy={true} smooth={true}>
                  <h1 isdark={isDark}>CAREER</h1>
                </Link>
              </li>
              <li>
                <Link to='studies' spy={true} smooth={true}>
                  <h1 isdark={isDark}>STUDIES</h1>
                </Link>
              </li>
            </ul>
          </S.HamburgerOpen>
        ) : (
          <S.Hamburger scrollposition={scrollposition}>
            <div
              onClick={() => {
                setHamburger(!hamburger);
              }}
            >
              <GiHamburgerMenu size='25' color='' />
            </div>
          </S.Hamburger>
        )}
      </S.RightDiv>
    </S.HeaderContainer>
  );
};

export default Header;

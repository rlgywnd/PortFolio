import * as S from './style';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

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
        {hamburger ? (
          <S.Hamburger hamprop={hamburger}>
            <div
              onClick={() => {
                setHamburger(!hamburger);
              }}
            >
              <IoIosArrowUp size='30' color='gray' />
            </div>
            <ul>
              <li>
                <Link to='about_me' spy={true} smooth={true}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to='projects' spy={true} smooth={true}>
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link to='education' spy={true} smooth={true}>
                  EDUCATION
                </Link>
              </li>
              <li>
                <Link to='career' spy={true} smooth={true}>
                  CAREER
                </Link>
              </li>
              <li>
                <Link to='studies' spy={true} smooth={true}>
                  STUDIES
                </Link>
              </li>
            </ul>
          </S.Hamburger>
        ) : (
          <S.Hamburger hamprop={hamburger}>
            <div
              onClick={() => {
                setHamburger(!hamburger);
              }}
            >
              <GiHamburgerMenu size='25' color='black' />
            </div>
          </S.Hamburger>
        )}
        {/* <S.Hamburger
          onClick={() => {
            setHamburger(!hamburger);
          }}
        >
          <GiHamburgerMenu size='25' />
        </S.Hamburger> */}
      </S.RightDiv>
    </S.HeaderContainer>
  );
};

export default Header;

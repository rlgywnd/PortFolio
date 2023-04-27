import * as S from './style';
import { Link } from 'react-scroll';
import { TfiArrowUp } from 'react-icons/tfi';
import { useState, useEffect } from 'react';

const SideBar = ({ children }) => {
  // scroll 이벤트
  const [scrollPosition, setScrollPosition] = useState(0);
  // console.log('window.scrollY : ', window.scrollY);
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
    <S.SideBarReal>
      <S.SideBarContainer>
        <div>
          <S.AboutMeUl scrolls={scrollPosition}>
            <h4>ABOUT ME</h4>
            <S.ProfileLiDiv scrolls={scrollPosition}>
              <Link to='about_me' spy={true} smooth={true}>
                <S.ProfileLi>PROFILE</S.ProfileLi>
              </Link>
            </S.ProfileLiDiv>
            <S.IntroLiDiv scrolls={scrollPosition}>
              <Link to='intro' spy={true} smooth={true}>
                <S.IntroLi>INTRO</S.IntroLi>
              </Link>
            </S.IntroLiDiv>
          </S.AboutMeUl>
          <S.ProjectsUl scrolls={scrollPosition}>
            <h4>PROJECTS</h4>
            <S.PortLiDiv scrolls={scrollPosition}>
              <Link to='pj_portfolio' spy={true} smooth={true}>
                <S.PortLi>김효중 포트폴리오</S.PortLi>
              </Link>
            </S.PortLiDiv>
            <S.UyouLiDiv scrolls={scrollPosition}>
              <Link to='pj_uyou' spy={true} smooth={true}>
                <S.UyouLi>우유부단</S.UyouLi>
              </Link>
            </S.UyouLiDiv>
            <S.BobeLiDiv scrolls={scrollPosition}>
              <Link to='pj_bobe' spy={true} smooth={true}>
                <S.BobeLi>보배빌림</S.BobeLi>
              </Link>
            </S.BobeLiDiv>
            <S.PadakLiDiv scrolls={scrollPosition}>
              <Link to='pj_stack' spy={true} smooth={true}>
                {' '}
                <S.PadakLi>StackOverFlow 클론</S.PadakLi>
              </Link>
            </S.PadakLiDiv>
          </S.ProjectsUl>
          <S.EducationUl scrolls={scrollPosition}>
            <h4>EDUCATION</h4>
            <S.CodeLiDiv scrolls={scrollPosition}>
              <Link to='codestates' spy={true} smooth={true}>
                <S.CodeLi>코드스테이츠</S.CodeLi>
              </Link>
            </S.CodeLiDiv>
          </S.EducationUl>
          <S.CareerUl scrolls={scrollPosition}>
            <h4>CAREER</h4>
            <S.NaraLiDiv scrolls={scrollPosition}>
              <Link to='narator' spy={true} smooth={true}>
                {' '}
                <S.NaraLi>나레이터모델</S.NaraLi>
              </Link>
            </S.NaraLiDiv>
            <S.FitLiDiv scrolls={scrollPosition}>
              <Link to='fitting' spy={true} smooth={true}>
                <S.FitLi>피팅모델</S.FitLi>{' '}
              </Link>
            </S.FitLiDiv>
          </S.CareerUl>
          <S.StudiesUl scrolls={scrollPosition}>
            <h4>STUDIES</h4>
            <S.SoloLiDiv scrolls={scrollPosition}>
              <Link to='self_study' spy={true} smooth={true}>
                <S.SoloLi>코딩 독학</S.SoloLi>
              </Link>
            </S.SoloLiDiv>
            <S.PoliceLiDiv scrolls={scrollPosition}>
              <Link to='police' spy={true} smooth={true}>
                <S.PoliceLi>9급 검찰 준비</S.PoliceLi>{' '}
              </Link>
            </S.PoliceLiDiv>
          </S.StudiesUl>
        </div>
      </S.SideBarContainer>
      <div>
        {children.map((el) => {
          return <S.AllComponentsDiv key={el.key}>{el}</S.AllComponentsDiv>;
        })}
      </div>
      <S.UpBtnContainer>
        <Link to='top' spy={true} smooth={true}>
          <S.UpBtnDiv>
            <TfiArrowUp size='30px' color='white' />
          </S.UpBtnDiv>
        </Link>
      </S.UpBtnContainer>
    </S.SideBarReal>
  );
};

export default SideBar;

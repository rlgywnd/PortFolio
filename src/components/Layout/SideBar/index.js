import * as S from './style';
import { Link } from 'react-scroll';
import { TfiArrowUp } from 'react-icons/tfi';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { darkmode } from '../../../recoil/darkmode';

const SideBar = ({ children, scrollposition }) => {
  const [isDark, setIsDark] = useRecoilState(darkmode);
  // console.log('전역 isDark : ', isDark);
  useEffect(() => {
    if (localStorage.getItem('port_mode')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [setIsDark]);
  const onClickDarkMode = () => {
    localStorage.setItem('port_mode', 'DARK');
  };
  const onClickWhiteMode = () => {
    localStorage.removeItem('port_mode');
  };

  return (
    <S.SideBarReal>
      <S.SideBarContainer scrollposition={scrollposition}>
        <div>
          <S.AboutMeUl scrolls={scrollposition}>
            <h4>ABOUT ME</h4>
            <S.ProfileLiDiv scrolls={scrollposition} isdark={isDark}>
              <Link to='about_me' spy={true} smooth={true}>
                <S.ProfileLi>PROFILE</S.ProfileLi>
              </Link>
            </S.ProfileLiDiv>
            <S.IntroLiDiv scrolls={scrollposition} isdark={isDark}>
              <Link to='intro' spy={true} smooth={true}>
                <S.IntroLi>INTRO</S.IntroLi>
              </Link>
            </S.IntroLiDiv>
          </S.AboutMeUl>
          <S.ProjectsUl scrolls={scrollposition}>
            <h4>PROJECTS</h4>
            <S.PortLiDiv scrolls={scrollposition} isdark={isDark}>
              <Link to='pj_portfolio' spy={true} smooth={true}>
                <S.PortLi>김효중 포트폴리오</S.PortLi>
              </Link>
            </S.PortLiDiv>
            <S.UyouLiDiv scrolls={scrollposition} isdark={isDark}>
              <Link to='pj_uyou' spy={true} smooth={true}>
                <S.UyouLi>우유부단</S.UyouLi>
              </Link>
            </S.UyouLiDiv>
            <S.BobeLiDiv scrolls={scrollposition} isdark={isDark}>
              <Link to='pj_bobe' spy={true} smooth={true}>
                <S.BobeLi>보배빌림</S.BobeLi>
              </Link>
            </S.BobeLiDiv>
            <S.PadakLiDiv scrolls={scrollposition} isdark={isDark}>
              <Link to='pj_stack' spy={true} smooth={true}>
                {' '}
                <S.PadakLi>StackOverFlow 클론</S.PadakLi>
              </Link>
            </S.PadakLiDiv>
          </S.ProjectsUl>
          <S.EducationUl scrolls={scrollposition}>
            <h4>EDUCATION</h4>
            <S.CodeLiDiv scrolls={scrollposition} isdark={isDark}>
              <Link to='codestates' spy={true} smooth={true}>
                <S.CodeLi>코드스테이츠</S.CodeLi>
              </Link>
            </S.CodeLiDiv>
          </S.EducationUl>
          <S.CareerUl scrolls={scrollposition}>
            <h4>CAREER</h4>
            <S.NaraLiDiv scrolls={scrollposition} isdark={isDark}>
              <Link to='narator' spy={true} smooth={true}>
                {' '}
                <S.NaraLi>나레이터모델</S.NaraLi>
              </Link>
            </S.NaraLiDiv>
            <S.FitLiDiv scrolls={scrollposition} isdark={isDark}>
              <Link to='fitting' spy={true} smooth={true}>
                <S.FitLi>피팅모델</S.FitLi>{' '}
              </Link>
            </S.FitLiDiv>
          </S.CareerUl>
          <S.StudiesUl scrolls={scrollposition}>
            <h4>STUDIES</h4>
            <S.SoloLiDiv scrolls={scrollposition} isdark={isDark}>
              <Link to='self_study' spy={true} smooth={true}>
                <S.SoloLi>코딩 독학</S.SoloLi>
              </Link>
            </S.SoloLiDiv>
            <S.PoliceLiDiv scrolls={scrollposition} isdark={isDark}>
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
      {isDark ? (
        <S.WhiteModeContainer>
          <S.WhiteModeDiv
            scrollposition={scrollposition}
            onClick={() => {
              onClickWhiteMode();
              setIsDark(false);
            }}
          >
            라이트모드
          </S.WhiteModeDiv>
        </S.WhiteModeContainer>
      ) : (
        <S.DarkModeContainer>
          <S.DarkModeDiv
            scrollposition={scrollposition}
            onClick={() => {
              onClickDarkMode();
              setIsDark(true);
            }}
          >
            다크모드
          </S.DarkModeDiv>
        </S.DarkModeContainer>
      )}
      <S.UpBtnContainer>
        <Link to='top' spy={true} smooth={true}>
          <S.UpBtnDiv scrollposition={scrollposition}>
            <TfiArrowUp size='23px' color='white' />
          </S.UpBtnDiv>
        </Link>
      </S.UpBtnContainer>
    </S.SideBarReal>
  );
};

export default SideBar;

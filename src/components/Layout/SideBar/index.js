import * as S from './style';
import { Link } from 'react-scroll';
import { TfiArrowUp } from 'react-icons/tfi';

const SideBar = ({ children }) => {
  console.log('Sidebar children : ', children);
  return (
    <S.SideBarReal>
      <S.SideBarContainer>
        <div>
          <ul>
            <h4>ABOUT ME</h4>
            <li>
              <Link to='profile' spy={true} smooth={true}>
                PROFILE
              </Link>
            </li>
            <li>
              <Link to='intro' spy={true} smooth={true}>
                INTRO
              </Link>
            </li>
          </ul>
          <ul>
            <h4>PROJECTS</h4>
            <li>
              <Link to='pj_portfolio' spy={true} smooth={true}>
                김효중 포트폴리오
              </Link>
            </li>
            <li>
              <Link to='pj_uyou' spy={true} smooth={true}>
                우유부단
              </Link>
            </li>
            <li>
              <Link to='pj_bobe' spy={true} smooth={true}>
                보배빌림
              </Link>
            </li>
            <li>
              <Link to='pj_stack' spy={true} smooth={true}>
                StackOverFlow 클론
              </Link>
            </li>
          </ul>
          <ul>
            <h4>EDUCATION</h4>
            <li>
              <Link to='codestates' spy={true} smooth={true}>
                코드스테이츠
              </Link>
            </li>
            <li>
              <Link to='school' spy={true} smooth={true}>
                광운대학교
              </Link>
            </li>
          </ul>
          <ul>
            <h4>CAREER</h4>
            <li>
              <Link to='narator' spy={true} smooth={true}>
                나레이터모델
              </Link>
            </li>
            <li>
              <Link to='fitting' spy={true} smooth={true}>
                피팅모델
              </Link>
            </li>
          </ul>
          <ul>
            <h4>STUDIES</h4>
            <li>
              <Link to='self_study' spy={true} smooth={true}>
                코딩 독학
              </Link>
            </li>
            <li>
              <Link to='police' spy={true} smooth={true}>
                9급 검찰 준비
              </Link>
            </li>
          </ul>
        </div>
      </S.SideBarContainer>
      <div>
        {children.map((el) => {
          return <S.AllComponentsDiv key={el.key}>{el}</S.AllComponentsDiv>;
        })}
      </div>
      <Link to='top' spy={true} smooth={true}>
        <S.UpBtnDiv>
          <TfiArrowUp size='30px' color='white' />
        </S.UpBtnDiv>
      </Link>
    </S.SideBarReal>
  );
};

export default SideBar;

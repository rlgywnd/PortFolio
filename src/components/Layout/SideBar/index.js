import * as S from './style';
import { Link } from 'react-scroll';

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
            <li>김효중 포트폴리오</li>
            <li>우유부단</li>
            <li>보배빌림</li>
            <li>StackOverFlow 클론</li>
          </ul>
        </div>
      </S.SideBarContainer>
      <div>
        {children.map((el) => {
          return <S.AllComponentsDiv key={el.key}>{el}</S.AllComponentsDiv>;
        })}
      </div>
    </S.SideBarReal>
  );
};

export default SideBar;

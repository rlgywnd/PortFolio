import styled from 'styled-components';

export const SideBarReal = styled.div`
  display: grid;
  grid-template-columns: 250px 800px 50px 50px;
  /* background-color: rgb(245, 245, 245); */
`;
export const SideBarContainer = styled.div`
  display: flex;
  word-break: break-all;
  position: fixed;
  top: 0;
  padding: 110px 0 0 30px;
  animation: ${(props) =>
    props.scrollposition >= 740
      ? 'fadeInUp 0.5s forwards 0s'
      : 'disappear 1.5s forwards 0s'};
  opacity: 0;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  @keyframes disappear {
    0% {
      opacity: 1;
      transform: translateZ(0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }
  @media (min-height: 840px) {
    animation: ${(props) =>
      props.scrollposition >= 900
        ? 'fadeInUp 0.5s forwards 0s'
        : 'disappear 1.5s forwards 0s'};
  }
  @media (min-height: 1100px) {
    animation: ${(props) =>
      props.scrollposition >= 1100
        ? 'fadeInUp 0.5s forwards 0s'
        : 'disappear 1.5s forwards 0s'};
  }
  @media (min-height: 1300px) {
    animation: ${(props) =>
      props.scrollposition >= 1300
        ? 'fadeInUp 0.5s forwards 0s'
        : 'disappear 1.5s forwards 0s'};
  }
  @media (max-width: 1100px) {
    display: none;
  }
  /* div {
    li {
      color: white;
    }
  } */
`;

// -------------- 사이드바 타이틀 텍스트들 --------------
export const AboutMeUl = styled.ul`
  margin: 0 10px 40px 0;
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
    transition: font-size 0.2s linear;
    font-size: ${(props) =>
      844 <= props.scrolls && props.scrolls < 1034 ? '18px' : '15px'};
  }
`;
export const ProjectsUl = styled.ul`
  margin: 0 10px 40px 0;
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
    transition: font-size 0.2s linear;
    font-size: ${(props) =>
      2107 <= props.scrolls && props.scrolls < 2413 ? '18px' : '15px'};
  }
`;
export const EducationUl = styled.ul`
  margin: 0 10px 40px 0;
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
    transition: font-size 0.2s linear;
    font-size: ${(props) =>
      7482 <= props.scrolls && props.scrolls < 7840 ? '18px' : '15px'};
  }
`;
export const CareerUl = styled.ul`
  margin: 0 10px 40px 0;
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
    transition: font-size 0.2s linear;
    font-size: ${(props) =>
      8445 <= props.scrolls && props.scrolls < 8817 ? '18px' : '15px'};
  }
`;
export const StudiesUl = styled.ul`
  margin: 0 10px 40px 0;
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
    transition: font-size 0.2s linear;
    font-size: ${(props) =>
      9427 <= props.scrolls && props.scrolls < 9724 ? '18px' : '15px'};
  }
`;
// rgb(248,206,7)
// -------------------- 사이드바 리스트Div + li 두 태그 다 --------------
export const ProfileLiDiv = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.25s linear;
  color: ${(props) =>
    1034 <= props.scrolls && props.scrolls < 1514 && !props.isdark
      ? '#3cb371'
      : 1034 <= props.scrolls && props.scrolls < 1514 && props.isdark
      ? 'rgb(248,206,7)'
      : ''};
`;
export const ProfileLi = styled.li`
  font-size: 13px;
  font-weight: bold;
  list-style-type: disc;
  list-style-position: inside;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    color: #d6d9dc;
  }
`;

export const IntroLiDiv = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.25s linear;
  color: ${(props) =>
    1514 <= props.scrolls && props.scrolls < 2107 && !props.isdark
      ? '#3cb371'
      : 1514 <= props.scrolls && props.scrolls < 2107 && props.isdark
      ? 'rgb(248,206,7)'
      : ''};
`;
export const IntroLi = styled.li`
  font-size: 13px;
  font-weight: bold;
  list-style-type: disc;
  list-style-position: inside;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    color: #d6d9dc;
  }
`;

export const PortLiDiv = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.25s linear;
  color: ${(props) =>
    2413 <= props.scrolls && props.scrolls < 3347 && !props.isdark
      ? '#3cb371'
      : 2413 <= props.scrolls && props.scrolls < 3347 && props.isdark
      ? 'rgb(248,206,7)'
      : ''};
`;
export const PortLi = styled.li`
  font-size: 13px;
  font-weight: bold;
  list-style-type: disc;
  list-style-position: inside;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    color: #d6d9dc;
  }
`;

export const UyouLiDiv = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.25s linear;
  color: ${(props) =>
    3347 <= props.scrolls && props.scrolls < 4904 && !props.isdark
      ? '#3cb371'
      : 3347 <= props.scrolls && props.scrolls < 4904 && props.isdark
      ? 'rgb(248,206,7)'
      : ''};
`;
export const UyouLi = styled.li`
  font-size: 13px;
  font-weight: bold;
  list-style-type: disc;
  list-style-position: inside;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    color: #d6d9dc;
  }
`;

export const BobeLiDiv = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.25s linear;
  color: ${(props) =>
    4904 <= props.scrolls && (props.scrolls < 6494) & !props.isdark
      ? '#3cb371'
      : 4904 <= props.scrolls && props.scrolls < 6494 && props.isdark
      ? 'rgb(248,206,7)'
      : ''};
`;
export const BobeLi = styled.li`
  font-size: 13px;
  font-weight: bold;
  list-style-type: disc;
  list-style-position: inside;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    color: #d6d9dc;
  }
`;

export const PadakLiDiv = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.25s linear;
  color: ${(props) =>
    6494 <= props.scrolls && props.scrolls < 7482 && !props.isdark
      ? '#3cb371'
      : 6494 <= props.scrolls && props.scrolls < 7482 && props.isdark
      ? 'rgb(248,206,7)'
      : ''};
`;
export const PadakLi = styled.li`
  font-size: 13px;
  font-weight: bold;
  list-style-type: disc;
  list-style-position: inside;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    color: #d6d9dc;
  }
`;

export const CodeLiDiv = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.25s linear;
  color: ${(props) =>
    7840 <= props.scrolls && props.scrolls < 8445 && !props.isdark
      ? '#3cb371'
      : 7840 <= props.scrolls && props.scrolls < 8445 && props.isdark
      ? 'rgb(248,206,7)'
      : ''};
`;
export const CodeLi = styled.li`
  font-size: 13px;
  font-weight: bold;
  list-style-type: disc;
  list-style-position: inside;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    color: #d6d9dc;
  }
`;

export const NaraLiDiv = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.25s linear;
  color: ${(props) =>
    8817 <= props.scrolls && props.scrolls < 9179 && !props.isdark
      ? '#3cb371'
      : 8817 <= props.scrolls && props.scrolls < 9179 && props.isdark
      ? 'rgb(248,206,7)'
      : ''};
`;
export const NaraLi = styled.li`
  font-size: 13px;
  font-weight: bold;
  list-style-type: disc;
  list-style-position: inside;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    color: #d6d9dc;
  }
`;

export const FitLiDiv = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.25s linear;
  color: ${(props) =>
    9179 <= props.scrolls && props.scrolls < 9427 && !props.isdark
      ? '#3cb371'
      : 9179 <= props.scrolls && props.scrolls < 9427 && props.isdark
      ? 'rgb(248,206,7)'
      : ''};
`;
export const FitLi = styled.li`
  font-size: 13px;
  font-weight: bold;
  list-style-type: disc;
  list-style-position: inside;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    color: #d6d9dc;
  }
`;

export const SoloLiDiv = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.25s linear;
  color: ${(props) =>
    9724 <= props.scrolls && props.scrolls < 10104 && !props.isdark
      ? '#3cb371'
      : 9724 <= props.scrolls && props.scrolls < 10104 && props.isdark
      ? 'rgb(248,206,7)'
      : ''};
`;
export const SoloLi = styled.li`
  font-size: 13px;
  font-weight: bold;
  list-style-type: disc;
  list-style-position: inside;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    color: #d6d9dc;
  }
`;

export const PoliceLiDiv = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.25s linear;
  color: ${(props) =>
    10104 <= props.scrolls && props.scrolls < 11000 && !props.isdark
      ? '#3cb371'
      : 10104 <= props.scrolls && props.scrolls < 11000 && props.isdark
      ? 'rgb(248,206,7)'
      : ''};
`;
export const PoliceLi = styled.li`
  font-size: 13px;
  font-weight: bold;
  list-style-type: disc;
  list-style-position: inside;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    color: #d6d9dc;
  }
`;

export const AllComponentsDiv = styled.div`
  width: 65vw;
  padding: 110px 0 0 30px;
  margin-left: 250px;
  @media (max-width: 1100px) {
    margin-left: 0;
  }
`;

// ---------- 상단끌어올리기 버튼 ------------
export const UpBtnContainer = styled.div`
  /* position: fixed; */
`;
export const UpBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  margin: 0 70px 50px 0;
  bottom: 0;
  height: 60px;
  width: 60px;
  background-color: #667085;
  border-radius: 50%;
  opacity: 0.8;
  cursor: pointer;
  :hover {
    background-color: #708090;
  }

  animation: ${(props) =>
    props.scrollposition >= 740
      ? 'fadeInUp 0.5s forwards 0s'
      : 'disappear 1.5s forwards 0s'};
  opacity: 0;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 0.8;
      transform: translateZ(0);
    }
  }
  @keyframes disappear {
    0% {
      opacity: 0.8;
      transform: translateZ(0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }
  @media (min-height: 840px) {
    animation: ${(props) =>
      props.scrollposition >= 900
        ? 'fadeInUp 0.5s forwards 0s'
        : 'disappear 1.5s forwards 0s'};
  }
  @media (min-height: 1100px) {
    animation: ${(props) =>
      props.scrollposition >= 1100
        ? 'fadeInUp 0.5s forwards 0s'
        : 'disappear 1.5s forwards 0s'};
  }
  @media (min-height: 1300px) {
    animation: ${(props) =>
      props.scrollposition >= 1300
        ? 'fadeInUp 0.5s forwards 0s'
        : 'disappear 1.5s forwards 0s'};
  }
`;
// ---------- 다크모드 버튼 ------------
export const DarkModeContainer = styled.div`
  position: fixed;
`;
export const DarkModeDiv = styled.div`
  color: white;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 70px;
  margin: 0 70px 50px 0;
  bottom: 0;
  height: 60px;
  width: 60px;
  background-color: #667085;
  border-radius: 50%;
  opacity: 0.8;
  cursor: pointer;
  :hover {
    background-color: #708090;
  }

  animation: ${(props) =>
    props.scrollposition >= 740
      ? 'fadeInUp 0.5s forwards 0s'
      : 'disappear 1.5s forwards 0s'};
  opacity: 0;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 0.8;
      transform: translateZ(0);
    }
  }
  @keyframes disappear {
    0% {
      opacity: 0.8;
      transform: translateZ(0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }
  @media (min-height: 840px) {
    animation: ${(props) =>
      props.scrollposition >= 900
        ? 'fadeInUp 0.5s forwards 0s'
        : 'disappear 1.5s forwards 0s'};
  }
  @media (min-height: 1100px) {
    animation: ${(props) =>
      props.scrollposition >= 1100
        ? 'fadeInUp 0.5s forwards 0s'
        : 'disappear 1.5s forwards 0s'};
  }
  @media (min-height: 1300px) {
    animation: ${(props) =>
      props.scrollposition >= 1300
        ? 'fadeInUp 0.5s forwards 0s'
        : 'disappear 1.5s forwards 0s'};
  }
`;
// -------------- 화이트모드 버튼 ----------------
export const WhiteModeContainer = styled.div`
  position: fixed;
`;
export const WhiteModeDiv = styled.div`
  color: white;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 70px;
  margin: 0 70px 50px 0;
  bottom: 0;
  height: 60px;
  width: 60px;
  background-color: #667085;
  border-radius: 50%;
  opacity: 0.9;
  cursor: pointer;
  :hover {
    background-color: #708090;
  }

  animation: ${(props) =>
    props.scrollposition >= 740
      ? 'fadeInUp 0.5s forwards 0s'
      : 'disappear 1.5s forwards 0s'};
  opacity: 0;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 0.9;
      transform: translateZ(0);
    }
  }
  @keyframes disappear {
    0% {
      opacity: 0.9;
      transform: translateZ(0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }
  @media (min-height: 840px) {
    animation: ${(props) =>
      props.scrollposition >= 900
        ? 'fadeInUp 0.5s forwards 0s'
        : 'disappear 1.5s forwards 0s'};
  }
  @media (min-height: 1100px) {
    animation: ${(props) =>
      props.scrollposition >= 1100
        ? 'fadeInUp 0.5s forwards 0s'
        : 'disappear 1.5s forwards 0s'};
  }
  @media (min-height: 1300px) {
    animation: ${(props) =>
      props.scrollposition >= 1300
        ? 'fadeInUp 0.5s forwards 0s'
        : 'disappear 1.5s forwards 0s'};
  }
`;

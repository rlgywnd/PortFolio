import styled from 'styled-components';

// 1100 , 600 에 따라 반응형

export const SideBarReal = styled.div`
  display: grid;
  grid-template-columns: 250px 800px 50px;
  background-color: rgb(245, 245, 245);
`;
export const SideBarContainer = styled.div`
  display: flex;
  word-break: break-all;
  position: fixed;
  top: 0;
  padding: 110px 0 0 30px;
  @media (max-width: 1100px) {
    display: none;
  }
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

// -------------------- 사이드바 리스트Div + li 두 태그 다 --------------
export const ProfileLiDiv = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.25s linear;
  color: ${(props) =>
    1034 <= props.scrolls && props.scrolls < 1514 ? '#3cb371' : '#667085'};
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
    1514 <= props.scrolls && props.scrolls < 2107 ? '#3cb371' : '#667085'};
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
    2413 <= props.scrolls && props.scrolls < 3347 ? '#3cb371' : '#667085'};
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
    3347 <= props.scrolls && props.scrolls < 4904 ? '#3cb371' : '#667085'};
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
    4904 <= props.scrolls && props.scrolls < 6494 ? '#3cb371' : '#667085'};
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
    6494 <= props.scrolls && props.scrolls < 7482 ? '#3cb371' : '#667085'};
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
    7840 <= props.scrolls && props.scrolls < 8445 ? '#3cb371' : '#667085'};
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
    8817 <= props.scrolls && props.scrolls < 9179 ? '#3cb371' : '#667085'};
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
    9179 <= props.scrolls && props.scrolls < 9427 ? '#3cb371' : '#667085'};
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
    9724 <= props.scrolls && props.scrolls < 10104 ? '#3cb371' : '#667085'};
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
    10104 <= props.scrolls && props.scrolls < 11000 ? '#3cb371' : '#667085'};
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
export const UpBtnContainer = styled.div`
  position: fixed;
`;
export const UpBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  margin: 0 70px 50px 0;
  bottom: 0;
  height: 50px;
  height: 70px;
  width: 70px;
  background-color: #667085;
  border-radius: 50%;
  opacity: 0.6;
  cursor: pointer;
`;

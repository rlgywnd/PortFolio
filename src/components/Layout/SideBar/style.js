import styled from 'styled-components';

// 1100 , 600 에 따라 반응형

export const SideBarReal = styled.div`
  /* display: flex;
  border: 5px solid red; */
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
  height: 100vh;
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
      1266 <= props.scrolls && props.scrolls < 1590 ? '18px' : '15px'};
  }
`;
export const ProjectsUl = styled.ul`
  margin: 0 10px 40px 0;
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
    transition: font-size 0.2s linear;
    font-size: ${(props) =>
      2589 <= props.scrolls && props.scrolls < 3038 ? '18px' : '15px'};
  }
`;
export const EducationUl = styled.ul`
  margin: 0 10px 40px 0;
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
    transition: font-size 0.2s linear;
    font-size: ${(props) =>
      7820 <= props.scrolls && props.scrolls < 8290 ? '18px' : '15px'};
  }
`;
export const CareerUl = styled.ul`
  margin: 0 10px 40px 0;
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
    transition: font-size 0.2s linear;
    font-size: ${(props) =>
      8759 <= props.scrolls && props.scrolls < 9270 ? '18px' : '15px'};
  }
`;
export const StudiesUl = styled.ul`
  margin: 0 10px 40px 0;
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
    transition: font-size 0.2s linear;
    font-size: ${(props) =>
      9728 <= props.scrolls && props.scrolls < 10000 ? '18px' : '15px'};
  }
`;

// -------------------- 사이드바 리스트Div + li 두 태그 다 --------------
export const ProfileLiDiv = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.25s linear;
  color: ${(props) =>
    1590 <= props.scrolls && props.scrolls < 1969 ? '#3cb371' : '#667085'};
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
    1969 <= props.scrolls && props.scrolls < 2589 ? '#3cb371' : '#667085'};
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
    3038 <= props.scrolls && props.scrolls < 3805 ? '#3cb371' : '#667085'};
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
    3805 <= props.scrolls && props.scrolls < 5319 ? '#3cb371' : '#667085'};
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
    5319 <= props.scrolls && props.scrolls < 6815 ? '#3cb371' : '#667085'};
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
    6815 <= props.scrolls && props.scrolls < 7820 ? '#3cb371' : '#667085'};
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
    8290 <= props.scrolls && props.scrolls < 8759 ? '#3cb371' : '#667085'};
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
    9270 <= props.scrolls && props.scrolls < 9497 ? '#3cb371' : '#667085'};
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
    9497 <= props.scrolls && props.scrolls < 9728 ? '#3cb371' : '#667085'};
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
  color: #667085;
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
  color: #667085;
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
export const UpBtnContainer = styled.div``;
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

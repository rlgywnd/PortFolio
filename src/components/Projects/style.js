import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  flex: 1;
`;
export const ProjectsTitleH1 = styled.h1`
  display: flex;
  padding: 110px 0 0 0;
  font-size: 70px;
  font-weight: bold;
  @media (max-width: 1100px) {
    font-size: 60px;
  }
  @media (max-width: 500px) {
    font-size: 50px;
  }
`;
export const TitleUnderlineDiv = styled.div`
  border-bottom: 8px solid rgb(248, 205, 7);
  margin-bottom: 80px;
  @media (max-width: 1100px) {
    width: 80vw;
  }
`;

export const ProjectsDiv = styled.div``;

export const ProjectsTypeDiv = styled.div`
  font-size: 25px;
  font-family: 'NEXON Lv2 Gothic' !important;
  margin-bottom: 20px;
`;
export const ProjectsNameDiv = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const IntroAndWorkDetail = styled.div`
  div {
    font-family: 'NEXON Lv2 Gothic' !important;
  }
`;
export const WorkDate = styled.div`
  margin-bottom: 20px;
  color: #667085;
  font-weight: bold;
`;
export const IntroDateDiv = styled.div`
  margin-bottom: 20px;
`;
export const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    font-size: 20px;
    font-family: 'NEXON Lv2 Gothic' !important;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: bold;
  }
`;
export const VideoTitleDiv = styled.div`
  font-size: 20px;
  font-family: 'NEXON Lv2 Gothic' !important;
  margin-bottom: 20px;
`;

// 실제사용모습들 모두를 담을 컨테이너 div
export const VideoContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

// 동영상나오기전 위에 text랑 화살표모양 담은 박스
export const VideoTextAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 45px;
  padding: 0 15px 0 15px;
  cursor: pointer;
  /* border: 1px solid red; */
`;

// text div  ex -> 메인화면, 로그인화면 등
export const VideoText = styled.div`
  font-size: 14px;
`;

// 화살표모양을 담은 div
export const VideoUyouMainBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.uyoumain ? 'rotate(180deg)' : '')};
`;
export const VideoUyouSignBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.uyousign ? 'rotate(180deg)' : '')};
`;
export const VideoUyouLoginBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.uyoulogin ? 'rotate(180deg)' : '')};
`;
export const VideoUyouMyPageBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.uyoumypage ? 'rotate(180deg)' : '')};
`;

// video를 담은 div
export const VideoUyouMainDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s linear;
  max-height: 0;
  max-height: ${(props) => (props.uyoumain ? '100vh' : '0')};
  margin-bottom: 7px;
`;
export const VideoUyouSignDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s linear;
  max-height: 0;
  max-height: ${(props) => (props.uyousign ? '100vh' : '0')};
  margin-bottom: 7px;
`;
export const VideoUyouLoginDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s linear;
  max-height: 0;
  max-height: ${(props) => (props.uyoulogin ? '100vh' : '0')};
  margin-bottom: 7px;
`;
export const VideoUyouMyPageDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s linear;
  max-height: 0;
  max-height: ${(props) => (props.uyoumypage ? '100vh' : '0')};
  margin-bottom: 7px;
`;

// video태그 자체
export const UyouMainVideo = styled.video`
  width: 100%;
  height: 100%;
  padding: 15px;
  padding: ${(props) => (props.uyoumain ? '15px' : '0')};
  margin-bottom: ${(props) => (props.uyoumain ? '30px' : '0px')};
  background-color: white;
`;
export const UyouSignVideo = styled.video`
  width: 100%;
  height: 100%;
  padding: 15px;
  padding: ${(props) => (props.uyousign ? '15px' : '0')};
  margin-bottom: ${(props) => (props.uyousign ? '30px' : '0px')};
  background-color: white;
`;
export const UyouLoginVideo = styled.video`
  width: 100%;
  height: 100%;
  padding: 15px;
  padding: ${(props) => (props.uyoulogin ? '15px' : '0')};
  margin-bottom: ${(props) => (props.uyoulogin ? '30px' : '0px')};
  background-color: white;
`;
export const UyouMyPageVideo = styled.video`
  width: 100%;
  height: 100%;
  padding: 15px;
  padding: ${(props) => (props.uyoumypage ? '15px' : '0')};
  margin-bottom: ${(props) => (props.uyoumypage ? '30px' : '0px')};
  background-color: white;
`;

// 사용기술 제목을 담을 div
export const SkillsTitleDiv = styled.div`
  font-size: 20px;
  font-family: 'NEXON Lv2 Gothic' !important;
  margin-bottom: 20px;
`;
// 사용기술을 담을 최상 컨테이너 div
export const SkillsContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: 'NEXON Lv2 Gothic' !important;
`;

// Skills 이름, 점 img 감쌀 Text
export const SkillsTextDiv = styled.div`
  font-size: 20px;
  font-family: 'NEXON Lv2 Gothic' !important;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bolder;
  margin-bottom: 10px;
`;

export const SkillsDetailDiv = styled.div`
  /* border: 1px solid red; */
  font-size: 18px;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: 0 0 0 18px;
`;

// 각 프로젝트 최상 Div
export const PortFolioDiv = styled.div`
  margin-bottom: 50px;
`;
export const UyouBooDanDiv = styled.div`
  margin-bottom: 50px;
`;
export const BoBeDiv = styled.div`
  margin-bottom: 50px;
`;
export const StackOverDiv = styled.div`
  margin-bottom: 50px;
`;

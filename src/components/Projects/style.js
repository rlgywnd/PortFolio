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
  @media (max-width: 390px) {
    font-size: 40px;
  }
`;
export const TitleUnderlineDiv = styled.div`
  border-bottom: 8px solid #3cb371;
  margin-bottom: 80px;
  @media (max-width: 1100px) {
    width: 80vw;
  }
`;
export const ProjectsDiv = styled.div`
  width: 80vw;
`;
// 사이드바 눌러서 scroll 갈때 깔끔하게 하기위해 만든 div
export const MarginDiv = styled.div`
  height: 65px;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const ProjectsTypeDiv = styled.div`
  font-size: 25px;
  font-family: 'NEXON Lv2 Gothic' !important;
  margin-bottom: 20px;
  @media (max-width: 1100px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
  @media (max-width: 390px) {
    font-size: 14px;
  }
`;
export const ProjectsNameDiv = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 1100px) {
    font-size: 35px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
  @media (max-width: 390px) {
    font-size: 25px;
  }
`;
export const IntroAndWorkDetail = styled.div`
  div {
    /* font-weight: bold; */
    font-family: 'NEXON Lv2 Gothic' !important;
  }
`;
export const WorkDate = styled.div`
  margin-bottom: 20px;
  color: #667085;
  font-weight: bold;
  font-size: 16px;
  @media (max-width: 1100px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 390px) {
    font-size: 11px;
  }
`;
export const IntroDateDiv = styled.div`
  margin-bottom: 20px;
`;
export const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    display: flex;
    align-items: center;
    margin-top: 15px;
    gap: 3px;
    font-size: 20px;
    font-family: 'NEXON Lv2 Gothic' !important;
    font-weight: bold;
    @media (max-width: 1100px) {
      font-size: 18px;
    }
    @media (max-width: 500px) {
      font-size: 16px;
    }
    @media (max-width: 390px) {
      font-size: 14px;
    }
  }
  h2 {
    font-family: 'NEXON Lv2 Gothic' !important;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 1100px) {
      font-size: 16px;
    }
    @media (max-width: 500px) {
      font-size: 12.5px;
    }
    @media (max-width: 390px) {
      font-size: 11px;
    }
  }
`;
export const VideoTitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'NEXON Lv2 Gothic' !important;
  margin-bottom: 20px;
`;

// 실제사용모습들 모두를 담을 컨테이너 div
export const VideoContainer = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    width: 80vw;
  }
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
  border-radius: 2px;
`;

// text div  ex -> 메인화면, 로그인화면 등
export const VideoText = styled.div`
  font-size: 14px;
`;

// Skills 이름 + 화살표버튼 담은 Div
export const SkillsTextAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 45px;
  padding: 0 15px 0 15px;
  cursor: pointer;
  border-radius: 2px;
`;
// Skill 이름 Div
export const SkillName = styled.div`
  font-size: 14px;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
`;

// 사용기술 제목을 담을 div
export const SkillsTitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'NEXON Lv2 Gothic' !important;
  margin-bottom: 20px;
`;
// 사용기술을 담을 최상 컨테이너 div
export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: 'NEXON Lv2 Gothic' !important;
  width: 80%;
  position: relative;
  @media (max-width: 500px) {
    width: 80vw;
  }
`;
export const SkillsSection = styled.div`
  margin-bottom: 7px;
`;

// 관련링크 Title div
export const LinkTitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'NEXON Lv2 Gothic' !important;
  margin-bottom: 10px;
`;

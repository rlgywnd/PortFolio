import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  flex: 1;
  /* border: 1px solid red; */
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
    /* margin-bottom: 5px; */
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
  div {
    /* border: 1px solid blue; */
    display: grid;
    grid-template-columns: 35px 800px;
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
  /* width: 100%; */
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  /* border: 1px solid red; */
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
  /* border: 1px solid #d3d3d3; */
  border-radius: 5px;
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
export const VideoBobeMainBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.bobemain ? 'rotate(180deg)' : '')};
`;
export const VideoBobeSignBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.bobesign ? 'rotate(180deg)' : '')};
`;
export const VideoBobeLoginBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.bobelogin ? 'rotate(180deg)' : '')};
`;
export const VideoBobeMyPageBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.bobemypage ? 'rotate(180deg)' : '')};
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

export const VideoBobeMainDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s linear;
  max-height: 0;
  max-height: ${(props) => (props.bobemain ? '100vh' : '0')};
  margin-bottom: 7px;
`;
export const VideoBobeSignDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s linear;
  max-height: 0;
  max-height: ${(props) => (props.bobesign ? '100vh' : '0')};
  margin-bottom: 7px;
`;
export const VideoBobeLoginDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s linear;
  max-height: 0;
  max-height: ${(props) => (props.bobelogin ? '100vh' : '0')};
  margin-bottom: 7px;
`;
export const VideoBobeMyPageDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s linear;
  max-height: 0;
  max-height: ${(props) => (props.bobemypage ? '100vh' : '0')};
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

export const BobeMainVideo = styled.video`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 15px;
  padding: ${(props) => (props.bobemain ? '15px' : '0')};
  margin-bottom: ${(props) => (props.bobemain ? '30px' : '0px')};
  background-color: white;
`;
export const BobeSignVideo = styled.video`
  width: 100%;
  height: 100%;
  padding: 15px;
  padding: ${(props) => (props.bobesign ? '15px' : '0')};
  margin-bottom: ${(props) => (props.bobesign ? '30px' : '0px')};
  background-color: white;
`;
export const BobeLoginVideo = styled.video`
  width: 100%;
  height: 100%;
  padding: 15px;
  padding: ${(props) => (props.bobelogin ? '15px' : '0')};
  margin-bottom: ${(props) => (props.bobelogin ? '30px' : '0px')};
  background-color: white;
`;
export const BobeMyPageVideo = styled.video`
  width: 100%;
  height: 100%;
  padding: 15px;
  padding: ${(props) => (props.bobemypage ? '15px' : '0')};
  margin-bottom: ${(props) => (props.bobemypage ? '30px' : '0px')};
  background-color: white;
`;

// Skills setting중
// Skills 이름 + 화살표버튼 담은 Div
export const SkillsTextAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 45px;
  padding: 0 15px 0 15px;
  cursor: pointer;
  border-radius: 3px;
`;
// Skill 이름 Div
export const SkillName = styled.div`
  font-size: 14px;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
`;

// --- Uyou React 화살표 버튼 Div--------------------
export const UyouReactBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.uyoureact ? 'rotate(180deg)' : '')};
`;
export const UyouTypeBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.uyoutype ? 'rotate(180deg)' : '')};
`;
export const UyouNextBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.uyounext ? 'rotate(180deg)' : '')};
`;
export const UyouToolkitBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.uyoutoolkit ? 'rotate(180deg)' : '')};
`;
export const UyouMswBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.uyoumsw ? 'rotate(180deg)' : '')};
`;
export const UyouStyledBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.uyoustyled ? 'rotate(180deg)' : '')};
`;
export const UyouHookBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.uyouhook ? 'rotate(180deg)' : '')};
`;
export const UyouAxiosBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.uyouaxios ? 'rotate(180deg)' : '')};
`;

export const BobeReactBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.bobereact ? 'rotate(180deg)' : '')};
`;
export const BobeViteBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.bobevite ? 'rotate(180deg)' : '')};
`;
export const BobeDaumBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.bobedaum ? 'rotate(180deg)' : '')};
`;
export const BobeRecoilBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.boberecoil ? 'rotate(180deg)' : '')};
`;
export const BobeMswBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.bobemsw ? 'rotate(180deg)' : '')};
`;
export const BobeStyledBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.bobestyled ? 'rotate(180deg)' : '')};
`;
export const BobeHookBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.bobehook ? 'rotate(180deg)' : '')};
`;
export const BobeAxiosBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.bobeaxios ? 'rotate(180deg)' : '')};
`;

export const PadakReactBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.padakreact ? 'rotate(180deg)' : '')};
`;
export const PadakReduxBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.padakredux ? 'rotate(180deg)' : '')};
`;
export const PadakStyledBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.padakstyled ? 'rotate(180deg)' : '')};
`;
export const PadakAxiosBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.padakaxios ? 'rotate(180deg)' : '')};
`;
export const PortReactBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.portreact ? 'rotate(180deg)' : '')};
`;
export const PortRouterBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.portrouter ? 'rotate(180deg)' : '')};
`;
export const PortScrolBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.portscrol ? 'rotate(180deg)' : '')};
`;
export const PortStyledBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.portstyled ? 'rotate(180deg)' : '')};
`;

// -------- Uyou React TextDiv담을 Div -------------
export const UyouReactTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.uyoureact ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.uyoureact ? 'auto' : 'none')};
`;
export const UyouTypeTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.uyoutype ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.uyoutype ? 'auto' : 'none')};
`;
export const UyouNextTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.uyounext ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.uyounext ? 'auto' : 'none')};
`;
export const UyouToolkitTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.uyoutoolkit ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.uyoutoolkit ? 'auto' : 'none')};
`;
export const UyouMswTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.uyoumsw ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.uyoumsw ? 'auto' : 'none')};
`;
export const UyouStyledTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.uyoustyled ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.uyoustyled ? 'auto' : 'none')};
`;
export const UyouHookTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.uyouhook ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.uyouhook ? 'auto' : 'none')};
`;
export const UyouAxiosTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.uyouaxios ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.uyouaxios ? 'auto' : 'none')};
`;

export const BobeReactTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.bobereact ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.bobereact ? 'auto' : 'none')};
`;
export const BobeViteTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.bobevite ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.bobevite ? 'auto' : 'none')};
`;
export const BobeDaumTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.bobedaum ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.bobedaum ? 'auto' : 'none')};
`;
export const BobeRecoilTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.boberecoil ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.boberecoil ? 'auto' : 'none')};
`;
export const BobeMswTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.bobemsw ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.bobemsw ? 'auto' : 'none')};
`;
export const BobeStyledTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.bobestyled ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.bobestyled ? 'auto' : 'none')};
`;
export const BobeHookTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.bobehook ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.bobehook ? 'auto' : 'none')};
`;
export const BobeAxiosTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.bobeaxios ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.bobeaxios ? 'auto' : 'none')};
`;

export const PadakReactTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.padakreact ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.padakreact ? 'auto' : 'none')};
`;
export const PadakReduxTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.padakredux ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.padakredux ? 'auto' : 'none')};
`;
export const PadakStyledTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.padakstyled ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.padakstyled ? 'auto' : 'none')};
`;
export const PadakAxiosTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.padakaxios ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.padakaxios ? 'auto' : 'none')};
`;

export const PortReactTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.portreact ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.portreact ? 'auto' : 'none')};
`;
export const PortRouterTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.portrouter ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.portrouter ? 'auto' : 'none')};
`;
export const PortScrolTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.portscrol ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.portscrol ? 'auto' : 'none')};
`;
export const PortStyledTextDiv = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.portstyled ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.portstyled ? 'auto' : 'none')};
`;

// ----------  Uyou React Text 담을 Div -----------
export const UyouReact = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.uyoureact ? '15px' : '0')};
  margin-bottom: ${(props) => (props.uyoureact ? '30px' : '0px')};
  background-color: white;
`;

export const UyouType = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.uyoutype ? '15px' : '0')};
  margin-bottom: ${(props) => (props.uyoutype ? '30px' : '0px')};
  background-color: white;
`;
export const UyouNext = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.uyounext ? '15px' : '0')};
  margin-bottom: ${(props) => (props.uyounext ? '30px' : '0px')};
  background-color: white;
`;
export const UyouToolkit = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.uyoutoolkit ? '15px' : '0')};
  margin-bottom: ${(props) => (props.uyoutoolkit ? '30px' : '0px')};
  background-color: white;
`;
export const UyouMsw = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.uyoumsw ? '15px' : '0')};
  margin-bottom: ${(props) => (props.uyoumsw ? '30px' : '0px')};
  background-color: white;
`;
export const UyouStyled = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.uyoustyled ? '15px' : '0')};
  margin-bottom: ${(props) => (props.uyoustyled ? '30px' : '0px')};
  background-color: white;
`;
export const UyouHook = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.uyouhook ? '15px' : '0')};
  margin-bottom: ${(props) => (props.uyouhook ? '30px' : '0px')};
  background-color: white;
`;
export const UyouAxios = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.uyouaxios ? '15px' : '0')};
  margin-bottom: ${(props) => (props.uyouaxios ? '30px' : '0px')};
  background-color: white;
`;
export const BobeReact = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.bobereact ? '15px' : '0')};
  margin-bottom: ${(props) => (props.bobereact ? '30px' : '0px')};
  background-color: white;
`;
export const BobeVite = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.bobevite ? '15px' : '0')};
  margin-bottom: ${(props) => (props.bobevite ? '30px' : '0px')};
  background-color: white;
`;
export const BobeDaum = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.bobedaum ? '15px' : '0')};
  margin-bottom: ${(props) => (props.bobedaum ? '30px' : '0px')};
  background-color: white;
`;
export const BobeRecoil = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.boberecoil ? '15px' : '0')};
  margin-bottom: ${(props) => (props.boberecoil ? '30px' : '0px')};
  background-color: white;
`;
export const BobeMsw = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.bobemsw ? '15px' : '0')};
  margin-bottom: ${(props) => (props.bobemsw ? '30px' : '0px')};
  background-color: white;
`;
export const BobeStyled = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.bobestyled ? '15px' : '0')};
  margin-bottom: ${(props) => (props.bobestyled ? '30px' : '0px')};
  background-color: white;
`;
export const BobeHook = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.bobehook ? '15px' : '0')};
  margin-bottom: ${(props) => (props.bobehook ? '30px' : '0px')};
  background-color: white;
`;
export const BobeAxios = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.bobeaxios ? '15px' : '0')};
  margin-bottom: ${(props) => (props.bobeaxios ? '30px' : '0px')};
  background-color: white;
`;

export const PadakReact = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.padakreact ? '15px' : '0')};
  margin-bottom: ${(props) => (props.padakreact ? '30px' : '0px')};
  background-color: white;
`;
export const PadakRedux = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.padakredux ? '15px' : '0')};
  margin-bottom: ${(props) => (props.padakredux ? '30px' : '0px')};
  background-color: white;
`;
export const PadakStyled = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.padakstyled ? '15px' : '0')};
  margin-bottom: ${(props) => (props.padakstyled ? '30px' : '0px')};
  background-color: white;
`;
export const PadakAxios = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.padakaxios ? '15px' : '0')};
  margin-bottom: ${(props) => (props.padakaxios ? '30px' : '0px')};
  background-color: white;
`;

export const PortReact = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.portreact ? '15px' : '0')};
  margin-bottom: ${(props) => (props.portreact ? '30px' : '0px')};
  background-color: white;
`;
export const PortRouter = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.portrouter ? '15px' : '0')};
  margin-bottom: ${(props) => (props.portrouter ? '30px' : '0px')};
  background-color: white;
`;
export const PortScrol = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.portscrol ? '15px' : '0')};
  margin-bottom: ${(props) => (props.portscrol ? '30px' : '0px')};
  background-color: white;
`;
export const PortStyled = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.portstyled ? '15px' : '0')};
  margin-bottom: ${(props) => (props.portstyled ? '30px' : '0px')};
  background-color: white;
`;

// 세팅중 여기까지

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
// 관련링크 최상위 컨테이너
export const UyouLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 700px;
  grid-template-rows: 40px 40px 40px;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: 'NEXON Lv2 Gothic' !important;
`;
export const BobeLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 700px;
  grid-template-rows: 40px 40px 40px 40px;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: 'NEXON Lv2 Gothic' !important;
`;
export const PadakLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 700px;
  grid-template-rows: 40px 40px 40px;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: 'NEXON Lv2 Gothic' !important;
`;
export const PortLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 700px;
  grid-template-rows: 40px 40px;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: 'NEXON Lv2 Gothic' !important;
`;
// 관련링크안에 각 링크내용, 체크이미지 담은 Div
export const UyouLinkTextDiv = styled.div`
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

  span {
    display: block;
    cursor: pointer;
    box-sizing: content-box;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    transition-property: all;
    width: 0;
    :hover {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 25px;
      color: white;
      background-color: #3cb371;
    }
    :not(:hover) {
      transition: 0.3s ease-out;
    }
    h1 {
      box-sizing: border-box;
      width: 156px;
      @media (max-width: 1100px) {
        width: 140px;
      }
      @media (max-width: 500px) {
        width: 109px;
      }
      @media (max-width: 390px) {
        width: 97px;
      }
    }
    h2 {
      width: 133px;
      @media (max-width: 1100px) {
        width: 120px;
      }
      @media (max-width: 500px) {
        width: 93px;
      }
      @media (max-width: 390px) {
        width: 83px;
      }
    }
    h3 {
      width: 490px;
      @media (max-width: 1100px) {
        width: 436px;
      }
      @media (max-width: 500px) {
        width: 342px;
      }
      @media (max-width: 390px) {
        width: 300px;
      }
    }
  }
`;

export const BobeLinkTextDiv = styled.div`
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

  span {
    display: block;
    cursor: pointer;
    box-sizing: content-box;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    transition-property: all;
    width: 0;
    :hover {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 25px;
      color: white;
      background-color: #3cb371;
    }
    :not(:hover) {
      transition: 0.3s ease-out;
    }
    h1 {
      /* display: block; */
      box-sizing: border-box;
      width: 156px;
      @media (max-width: 1100px) {
        width: 140px;
      }
      @media (max-width: 500px) {
        width: 109px;
      }
      @media (max-width: 390px) {
        width: 98px;
      }
    }
    h2 {
      width: 133px;
      @media (max-width: 1100px) {
        width: 120px;
      }
      @media (max-width: 500px) {
        width: 93px;
      }
      @media (max-width: 390px) {
        width: 84px;
      }
    }
    h3 {
      width: 173px;
      @media (max-width: 1100px) {
        width: 155px;
      }
      @media (max-width: 500px) {
        width: 122px;
      }
      @media (max-width: 390px) {
        width: 107px;
      }
    }
    h4 {
      width: 133px;
      @media (max-width: 1100px) {
        width: 118px;
      }
      @media (max-width: 500px) {
        width: 90px;
      }
      @media (max-width: 390px) {
        width: 82px;
      }
    }
    h5 {
      width: 367px;
      @media (max-width: 1100px) {
        width: 326px;
      }
      @media (max-width: 500px) {
        width: 255px;
      }
      @media (max-width: 390px) {
        width: 226px;
      }
    }
  }
`;
export const PadakLinkTextDiv = styled.div`
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

  span {
    display: block;
    cursor: pointer;
    box-sizing: content-box;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    transition-property: all;
    width: 0;
    :hover {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 25px;
      color: white;
      background-color: #3cb371;
    }
    :not(:hover) {
      transition: 0.3s ease-out;
    }
    h1 {
      /* display: block; */
      box-sizing: border-box;
      width: 156px;
      @media (max-width: 1100px) {
        width: 140px;
      }
      @media (max-width: 500px) {
        width: 109px;
      }
      @media (max-width: 390px) {
        width: 98px;
      }
    }
    h2 {
      width: 133px;
      @media (max-width: 1100px) {
        width: 120px;
      }
      @media (max-width: 500px) {
        width: 93px;
      }
      @media (max-width: 390px) {
        width: 84px;
      }
    }
    h3 {
      width: 123px;
      @media (max-width: 1100px) {
        width: 110px;
      }
      @media (max-width: 500px) {
        width: 85px;
      }
      @media (max-width: 390px) {
        width: 76px;
      }
    }
  }
`;
export const PortLinkTextDiv = styled.div`
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

  span {
    display: block;
    cursor: pointer;
    box-sizing: content-box;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    transition-property: all;
    width: 0;
    :hover {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 25px;
      color: white;
      background-color: #3cb371;
    }
    :not(:hover) {
      transition: 0.3s ease-out;
    }
    h1 {
      width: 290px;
      @media (max-width: 1100px) {
        width: 258px;
      }
      @media (max-width: 500px) {
        width: 203px;
      }
      @media (max-width: 390px) {
        width: 201px;
      }
    }
    h2 {
      width: 133px;
      @media (max-width: 1100px) {
        width: 120px;
      }
      @media (max-width: 500px) {
        width: 93px;
      }
    }
  }
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

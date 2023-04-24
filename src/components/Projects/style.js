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
  /* border: 1px solid yellow; */
`;

export const SkillsTextAndDetailDiv = styled.div`
  display: grid;
  grid-template-columns: 230px 40vw;
  /* font-weight: bold; */
  font-family: 'NEXON Lv2 Gothic' !important;
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 30px;
  @media (max-width: 1100px) {
    font-size: 14px;
    grid-template-columns: 190px 53%;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    grid-template-columns: 150px 250px;
  }
  @media (max-width: 390px) {
    font-size: 10px;
    grid-template-columns: 30vw 50vw;
  }
`;
// Skills 이름, 점 img 감쌀 Text
export const SkillsTextDiv = styled.div`
  font-size: 18px;
  font-family: 'NEXON Lv2 Gothic' !important;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bolder;
  box-sizing: content-box;
  margin-bottom: 15px;
  @media (max-width: 1100px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
  }
  @media (max-width: 390px) {
    font-size: 11px;
  }
`;

// export const SkillsDetailDiv = styled.div`
//   display: flex;
//   align-items: center;
//   /* border: 1px solid blue; */
//   font-size: 14px;
//   font-family: 'NEXON Lv2 Gothic' !important;
//   padding: 0 0 0 18px;
//   margin-bottom: 15px;
//   width: 900px;
//   @media (max-width: 1100px) {
//     font-size: 12px;
//   }
//   @media (max-width: 500px) {
//     font-size: 10px;
//   }
// `;

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
  /* display: flex; */
  /* flex-direction: column; */
  display: grid;
  grid-template-columns: 700px;
  grid-template-rows: 40px 40px 40px;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: 'NEXON Lv2 Gothic' !important;
  /* border: 1px solid yellow; */
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

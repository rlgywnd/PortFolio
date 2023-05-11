import styled from 'styled-components';

export const UyouBooDanDiv = styled.div`
  margin-bottom: 50px;
`;

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

// 관련링크 최상위 컨테이너
export const UyouLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 700px;
  grid-template-rows: 40px 40px 40px 40px 40px;
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
    height: 23px;
    padding-top: 4px;
    @media (max-width: 500px) {
      height: 17px;
    }
    @media (max-width: 390px) {
      height: 15px;
    }
    :hover {
      transition: all 0.3s linear;
      width: 100%;
      color: white;
      background-color: #3cb371;
    }
    :not(:hover) {
      transition: 0.3s linear;
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
    h4 {
      width: 280px;
      @media (max-width: 1100px) {
        width: 247px;
      }
      @media (max-width: 500px) {
        width: 195px;
      }
      @media (max-width: 390px) {
        width: 175px;
      }
    }
    h5 {
      width: 236px;
      @media (max-width: 1100px) {
        width: 210px;
      }
      @media (max-width: 500px) {
        width: 165px;
      }
      @media (max-width: 390px) {
        width: 145px;
      }
    }
  }
`;

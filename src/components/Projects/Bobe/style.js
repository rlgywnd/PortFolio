import styled from 'styled-components';

export const BoBeDiv = styled.div`
  margin-bottom: 50px;
`;

// 화살표모양을 담은 div

// // --- Uyou React 화살표 버튼 Div--------------------

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

// // -------- Uyou React TextDiv담을 Div -------------

export const BobeReactTextDiv = styled.div`
  color: ${(props) => (props.isdark ? 'white' : 'black')};
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
  width: 100%;
  padding: 25px 15px 25px 15px;
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
  color: ${(props) => (props.isdark ? 'white' : 'black')};
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
  width: 100%;
  padding: 25px 15px 25px 15px;
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
  color: ${(props) => (props.isdark ? 'white' : 'black')};
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
  width: 100%;
  padding: 25px 15px 25px 15px;
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
  color: ${(props) => (props.isdark ? 'white' : 'black')};
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
  width: 100%;
  padding: 25px 15px 25px 15px;
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
  color: ${(props) => (props.isdark ? 'white' : 'black')};
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
  width: 100%;
  padding: 25px 15px 25px 15px;
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
  color: ${(props) => (props.isdark ? 'white' : 'black')};
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
  width: 100%;
  padding: 25px 15px 25px 15px;
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
  color: ${(props) => (props.isdark ? 'white' : 'black')};
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
  width: 100%;
  padding: 25px 15px 25px 15px;
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
  color: ${(props) => (props.isdark ? 'white' : 'black')};
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
  width: 100%;
  padding: 25px 15px 25px 15px;
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

// // ----------  Uyou React Text 담을 Div -----------

export const BobeReact = styled.div`
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.bobereact ? '15px' : '0')};
  margin-bottom: ${(props) => (props.bobereact ? '30px' : '0px')};
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
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
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
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
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
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
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
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
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
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
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
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
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
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
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
`;

// // 관련링크 최상위 컨테이너

export const BobeLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 700px;
  grid-template-rows: 40px 40px 40px 40px 40px 40px;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: 'NEXON Lv2 Gothic' !important;
`;

// // 관련링크안에 각 링크내용, 체크이미지 담은 Div

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
      background-color: #3cb371;
    }
    h1 {
      box-sizing: border-box;
      width: 160px;
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
      width: 136px;
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
      width: 176px;
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
      width: 370px;
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
    h6 {
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
  }
`;

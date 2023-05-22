import styled from 'styled-components';

export const StackOverDiv = styled.div`
  margin-bottom: 50px;
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

// 링크 컨테이너
export const PadakLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 700px;
  grid-template-rows: 40px 40px 40px;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: 'NEXON Lv2 Gothic' !important;
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
      width: 125px;
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

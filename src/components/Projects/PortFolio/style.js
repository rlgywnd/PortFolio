import styled from 'styled-components';

export const PortFolioDiv = styled.div`
  margin-bottom: 50px;
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

export const PortLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 700px;
  grid-template-rows: 40px 40px;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: 'NEXON Lv2 Gothic' !important;
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
      width: 290px;
      @media (max-width: 1100px) {
        width: 258px;
      }
      @media (max-width: 500px) {
        width: 208px;
      }
      @media (max-width: 390px) {
        width: 208px;
      }
    }
    h2 {
      width: 137px;
      @media (max-width: 1100px) {
        width: 126px;
      }
      @media (max-width: 500px) {
        width: 98px;
      }
    }
  }
`;

import styled from 'styled-components';

export const PortFolioDiv = styled.div`
  margin-bottom: 50px;
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
    :hover {
      transition: all 0.3s linear;
      width: 100%;
      color: ${(props) => (props.isdark ? 'black' : 'white')};
      background-color: ${(props) =>
        props.isdark ? 'rgb(248,206,7)' : '#3cb371'};
    }
    :not(:hover) {
      transition: 0.3s linear;
      background-color: ${(props) =>
        props.isdark ? 'rgb(248,206,7)' : '#3cb371'};
    }
    @media (max-width: 500px) {
      height: 17px;
    }
    @media (max-width: 390px) {
      height: 15px;
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

import styled from 'styled-components';

export const StackOverDiv = styled.div`
  margin-bottom: 50px;
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
      transition: all 0.25s linear;
      width: 100%;
      color: ${(props) => (props.isdark ? 'black' : 'white')};
      background-color: ${(props) =>
        props.isdark ? 'rgb(248,206,7)' : '#3cb371'};
    }
    :not(:hover) {
      transition: 0.25s linear;
      background-color: ${(props) =>
        props.isdark ? 'rgb(248,206,7)' : '#3cb371'};
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

import styled from 'styled-components';

export const BoBeDiv = styled.div`
  margin-bottom: 50px;
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
      color: ${(props) => (props.isdark ? 'black' : 'white')};
      background-color: ${(props) =>
        props.isdark ? 'rgb(248,206,7)' : '#3cb371'};
    }
    :not(:hover) {
      transition: 0.3s linear;
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

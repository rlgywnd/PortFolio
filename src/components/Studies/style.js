import styled from 'styled-components';

export const StudiesContainer = styled.div`
  flex: 1;
  margin-bottom: 300px;
`;

export const StudiesTitleH1 = styled.h1`
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
  border-bottom: ${(props) =>
    props.isdark ? '8px solid rgb(248,206,7)' : '8px solid #3cb371'};
  margin-bottom: 80px;
  @media (max-width: 1100px) {
    width: 80vw;
  }
`;
export const MarginDiv = styled.div`
  height: 65px;
  @media (max-width: 1100px) {
    display: none;
  }
`;
export const StudiesDiv = styled.div`
  width: 80vw;
`;
export const SelfStudyDiv = styled.div`
  margin-bottom: 80px;
`;
export const PoliceDiv = styled.div``;

export const CareerDate = styled.div`
  font-family: 'NEXON Lv2 Gothic' !important;
  margin-bottom: 20px;
  color: ${(props) => (props.isdark ? '#d3d3d3' : '#667085')};
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
export const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    display: flex;
    align-items: center;
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
      font-size: 15px;
    }
  }
  h3 {
    font-weight: bold;
    display: flex;
    align-items: center;
    font-family: 'NEXON Lv2 Gothic' !important;
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
      font-size: 12px;
    }
   
    span {
      height: 23px;
      padding-top: 4px;
      cursor: pointer;
      display: block;
      box-sizing: content-box;
      align-items: center;
      width: 0;
      :hover {
        transition: all 0.3s linear;
        width: 320px;
        color: white;
        color: ${(props) => (props.isdark ? 'black' : 'white')};
      background-color: ${(props) =>
        props.isdark ? 'rgb(248,206,7)' : '#3cb371'};
        @media (max-width: 1100px) {
        width: 283px;
        }
        @media (max-width: 500px) {
          width: 225px;
        }
        @media (max-width: 390px) {
          width: 210px;
         }
      }
      :not(:hover) {
        transition: all 0.3s linear;
      background-color: ${(props) =>
        props.isdark ? 'rgb(248,206,7)' : '#3cb371'};
        width: 0px;
      }
        @media (max-width: 500px) {
          height: 15px;
          padding-top: 3px;
        }
        @media (max-width: 390px) {
          width: 210px;
         }
    }
    h2 {
      display: flex;
      width: 320px;
      @media (max-width: 1100px) {
        width: 285px;
      }
      @media (max-width: 500px) {
        width: 225px;
      }
      @media (max-width: 390px) {
        width: 215px;
    }
  }
`;

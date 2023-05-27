import styled from 'styled-components';

export const EduContainer = styled.div`
  flex: 1;
`;

export const EduTitleH1 = styled.h1`
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
export const EduDiv = styled.div`
  width: 80vw;
`;
export const CodeStatesDiv = styled.div`
  margin-bottom: 80px;
`;
export const EduDate = styled.div`
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
    margin-top: 5px;
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
  h2 {
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
      font-size: 11px;
    }
  }
`;
// ---------
export const RatingTitleH1 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
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
`;

export const RatingContainer = styled.div`
  font-family: 'NEXON Lv2 Gothic' !important;
  width: 80%;
  position: relative;
  @media (max-width: 500px) {
    width: 80vw;
  }
`;
export const RatingTextAndBtn = styled.div`
  color: ${(props) => (props.isdark ? 'white' : 'black')};
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0 15px 0 15px;
  cursor: pointer;
  border-radius: 5px;
`;
// Skill 이름 Div
export const RatingTextDiv = styled.div`
  font-size: 14px;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
`;

export const RatingBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.rating ? 'rotate(180deg)' : '')};
`;
export const RatingImgContainer = styled.div`
  width: 100%;
  padding: 25px 15px 25px 15px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  max-height: ${(props) => (props.rating ? '100vh' : '0')};
  margin-bottom: 7px;
  display: ${(props) => (props.rating ? 'auto' : 'none')};
  h1 {
    color: black;
    margin-bottom: 10px;
    font-family: 'NEXON Lv2 Gothic' !important;
    font-size: 12px;
  }
`;

export const RatingImgDiv = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  padding: ${(props) => (props.rating ? '15px' : '0')};
  margin-bottom: ${(props) => (props.rating ? '30px' : '0px')};
  background-color: white;
  img {
    padding: 10px;
    object-fit: contain;
    width: 2000px;
    height: 400px;
  }
`;

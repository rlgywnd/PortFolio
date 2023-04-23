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
`;
export const TitleUnderlineDiv = styled.div`
  border-bottom: 8px solid #3cb371;
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
  color: #667085;
  font-weight: bold;
  font-size: 16px;
  @media (max-width: 1100px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
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
  }
  div {
    /* border: 1px solid blue; */
    font-weight: bold;
    display: grid;
    grid-template-columns: 35px 800px;
    align-items: center;
    font-family: 'NEXON Lv2 Gothic' !important;
    /* gap: 1px; */
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 1100px) {
      font-size: 16px;
    }
    @media (max-width: 500px) {
      font-size: 12.5px;
    }
  }
`;
export const SchoolDiv = styled.div``;

import styled from 'styled-components';

export const CareerContainer = styled.div`
  flex: 1;
`;

export const CareerTitleH1 = styled.h1`
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
export const CareerDiv = styled.div`
  width: 80vw;
`;
export const NaratorDiv = styled.div`
  margin-bottom: 80px;
`;
export const CareerDate = styled.div`
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
  h2 {
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: 'NEXON Lv2 Gothic' !important;
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
  }
`;
export const FittingDiv = styled.div``;

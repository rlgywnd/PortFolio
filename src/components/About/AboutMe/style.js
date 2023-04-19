import styled from 'styled-components';
import backgroundImg2 from '../../../assets/background2.JPG';

export const AboutMeContainer = styled.div`
  flex: 1;
`;
export const TitleUnderlineDiv = styled.div`
  border-bottom: 8px solid rgb(248, 205, 7);
  margin-bottom: 20px;
  @media (max-width: 1100px) {
    width: 80vw;
  }
`;
export const AboutMeTitleH1 = styled.h1`
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
export const AboutMeProfileDiv = styled.div`
  display: grid;
  grid-template-columns: 400px 700px;
  grid-template-rows: 600px;
  column-gap: 100px;
  @media (max-width: 1100px) {
    column-gap: 50px;
  }
  @media (max-width: 800px) {
    grid-template-columns: 500px;
    grid-template-rows: 500px;
  }
`;
export const ProfileImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 100%;
    height: 70%;
    border-radius: 5px;
    background-image: url(${backgroundImg2});
    background-position: center;
    background-size: cover;
    @media (max-width: 570px) {
      width: 100vw;
      margin: 0 100px 0 0;
    }
  }
`;
export const ProfileUl = styled.ul`
  display: grid;
  padding: 92px 0 15px 20px;
  grid-template-columns: 600px;
  grid-template-rows: 100px 100px 100px 100px 100px;
  @media (max-width: 800px) {
    padding: 0 0 0 5px;
    grid-template-columns: 600px;
    grid-template-rows: 50px 50px 50px 50px 50px;
  }
`;
export const ProfileLi = styled.li`
  display: flex;
  gap: 15px;
  font-size: 20px;
  @media (max-width: 1100px) {
      font-size: 18px;
    }
    @media (max-width: 500px) {
      font-size: 17px;
    }
  h4 {
  }
  div {
    font-family: 'NEXON Lv2 Gothic' !important
  }

  h5 {
    display: flex;
    align-items: center;
    color: 
    font-family: 'NEXON Lv2 Gothic' !important;
    box-sizing: border-box;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    transition-property: all;
    width: 0px;
    font-weight: bold;
    :active {
      color: #4285f4;
    }
    :hover {
      width: 100%;
      background-color: rgb(255, 218, 55);
    }
    :not(:hover) {
      transition: 0.3s ease-out;
    }
  }
`;
export const IntroUl = styled.div`
  margin-top: 50px;
  font-size: 20px;
  @media (min-width: 801px) {
    width: 1500px;
  }
  @media (max-width: 800px) {
    width: 480px;
  }
  @media (max-width: 570px) {
    width: 400px;
  }
`;
export const IntroLi = styled.div`
  h1 {
    font-weight: bolder;
    font-size: 40px;
    margin-bottom: 40px;
    @media (max-width: 1100px) {
      font-size: 35px;
    }
    @media (max-width: 500px) {
      font-size: 30px;
    }
  }
  div {
    font-size: 20px;
    font-family: 'NEXON Lv2 Gothic' !important;
    margin-bottom: 10px;
    @media (max-width: 1100px) {
      font-size: 17px;
    }
    @media (max-width: 500px) {
      font-size: 15px;
    }
  }
`;

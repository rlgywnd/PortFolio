import styled from 'styled-components';
// import backgroundImg2 from '../../../assets/background3.jpeg';
import backgroundImg2 from '../../../assets/background2.JPG';

export const AboutMeContainer = styled.div`
  flex: 1;
`;
export const TitleUnderlineDiv = styled.div`
  border-bottom: ${(props) =>
    props.isdark ? '8px solid rgb(248,206,7)' : '8px solid #3cb371'};
  margin-bottom: 80px;
  @media (max-width: 1100px) {
    width: 80vw;
  }
`;
// 사이드바 눌러서 scroll 갈때 깔끔하게 하기위해 만든 div
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
  @media (max-width: 390px) {
    font-size: 40px;
  }
`;
export const AboutMeProfileDiv = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-template-rows: 400px;
  column-gap: 40px;
  @media (max-width: 1100px) {
    column-gap: 30px;
  }
  @media (max-width: 800px) {
    grid-template-columns: 80vw;
    grid-template-rows: 480px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 80vw;
    grid-template-rows: 420px;
  }
  @media (max-width: 390px) {
    grid-template-columns: 80vw;
    grid-template-rows: 320px;
  }
`;
export const ProfileImgDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-image: url(${backgroundImg2});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 800px) {
    width: 450px;
    height: 450px;
  }
  @media (max-width: 500px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 390px) {
    width: 300px;
    height: 300px;
  }
`;
export const ProfileUl = styled.ul`
  display: grid;
  grid-template-columns: 400px;
  grid-template-rows: 80px 80px 80px 80px 80px;
  @media (max-width: 800px) {
    padding: 0 0 0 5px;
    grid-template-columns: 600px;
    grid-template-rows: 50px 50px 50px 50px 50px;
  }
`;
export const ProfileLi = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 7px;
  font-size: 18px;
  @media (max-width: 1100px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (max-width: 390px) {
    font-size: 13px;
  }
  h4 {
    font-family: 'NEXON Lv2 Gothic' !important;
    font-weight: bold;
  }
  div {
    font-family: 'NEXON Lv2 Gothic' !important;
    font-weight: bold;
  }
  h5 {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 0px;
    font-weight: bold;
    height: 28px;
    :hover {
      transition: all 0.25s linear;
      -webkit-transition: all 0.25s linear;
      -moz-transition: all 0.25s linear;
      width: 101%;
      color: ${(props) => (props.isdark ? 'black' : 'white')};
      background-color: ${(props) =>
        props.isdark ? 'rgb(248,206,7)' : '#3cb371'};
    }
    :not(:hover) {
      transition: width 0.25s linear;
      -webkit-transition: all 0.25s linear;
      -moz-transition: all 0.25s linear;
      width: 0px;
      background-color: ${(props) =>
        props.isdark ? 'rgb(248,206,7)' : '#3cb371'};
    }
  }
`;
export const IntroDiv = styled.div`
  padding-top: 30px;
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
    @media (max-width: 390px) {
      font-size: 25px;
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
    @media (max-width: 390px) {
      width: 80vw;
      font-size: 13px;
    }
    span {
      color: ${(props) => (props.isdark ? 'rgb(248,206,7)' : '#3cb371')};
      font-size: 22px;
      font-weight: bolder;
      font-family: 'NEXON Lv2 Gothic' !important;
      @media (max-width: 1100px) {
        font-size: 19px;
      }
      @media (max-width: 500px) {
        font-size: 17px;
      }
      @media (max-width: 390px) {
        width: 80vw;
        font-size: 15px;
      }
    }
  }
`;

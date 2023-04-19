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
  /* border: 1px solid blue; */
  @media (max-width: 1100px) {
    /* grid-template-columns: 400px;
    grid-template-rows: 500px; */
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
      /* border: 1px solid red; */
      width: 100vw;
      margin: 0 100px 0 0;
    }
  }
`;
export const ProfileUl = styled.ul`
  display: grid;
  /* border: 1px solid black; */
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
  h4 {
    font-weight: bold;
  }
  div {
    color: #667085;
    font-weight: 400;
  }
  h5 {
    text-decoration: underline;
    font-weight: bold;
    /* font-size: 25px; */
    :active {
      color: #4285f4;
    }
    :hover {
      color: #4285f4;
    }
  }
`;

export const IntroUl = styled.div`
  margin-top: 50px;
  font-size: 20px;
  font-weight: 600;
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
    font-size: 30px;
    margin-bottom: 15px;
  }
  div {
    color: #667085;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

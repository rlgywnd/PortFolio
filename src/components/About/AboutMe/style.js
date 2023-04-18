import styled from 'styled-components';
import backgroundImg2 from '../../../assets/background2.JPG';

export const AboutMeContainer = styled.div`
  flex: 1;
  /* background-color: #eef7ff; */
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
  border: 1px solid blue;
  @media (max-width: 1100px) {
    grid-template-columns: 400px;
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
  }
`;
export const ProfileUl = styled.ul`
  display: grid;
  border: 1px solid black;
  padding: 90px 0 10px 20px;
  grid-template-columns: 600px;
  grid-template-rows: 100px 100px 100px 100px 100px;
`;
export const ProfileLi = styled.li`
  display: flex;
  gap: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const IntroUl = styled.div`
  border: 1px solid red;
  font-size: 20px;
  font-weight: 600;
  /* color: #4285f4; */
  /* background-color: #4285f4; */
`;
export const IntroLi = styled.div``;

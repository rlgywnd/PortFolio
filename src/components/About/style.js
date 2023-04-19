import styled from 'styled-components';
import backgroundImg from '../../assets/background.jpeg';
// import backgroundImg2 from '../../assets/background2.JPG';
// import backgroundImg3 from '../../assets/background3.jpeg';

export const AboutContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ShortAboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    // 배경만 투명도 주기
    url(${backgroundImg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  section {
    font-size: 60px;
    color: white;
    font-weight: bold;
    @media (max-width: 1100px) {
      font-size: 50px;
    }
    @media (max-width: 500px) {
      font-size: 40px;
    }
    div {
      font-size: 60px;
      margin-bottom: 20px;
      @media (max-width: 1100px) {
        font-size: 50px;
      }
      @media (max-width: 500px) {
        font-size: 40px;
      }
    }
    span {
      font-size: 90px;
      border-bottom: 13px solid rgb(248, 205, 7);
      text-underline-offset: 3.5px;
      display: inline-block;
      @media (max-width: 1100px) {
        font-size: 70px;
      }
      @media (max-width: 500px) {
        font-size: 50px;
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: white;
    font-weight: bold;
    font-size: 25px;
    @media (max-width: 1100px) {
      font-size: 20px;
    }
    @media (max-width: 500px) {
      font-size: 15px;
    }
  }
`;
export const ArrowContainer = styled.div``;
export const ArrowDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0;
  height: 0;
  border-top: 15px solid;
  border-right: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid transparent;
  margin-top: 7px;
  margin-left: 7px;
  cursor: pointer;
  animation: horizontal 1.5s ease-in infinite;
  @keyframes horizontal {
    0% {
      margin-top: 300px;
    }
    30% {
      margin-top: 370px;
    }
    40% {
      margin-top: 350px;
    }
    47% {
      margin-top: 365px;
    }
    90% {
      margin-top: 365px;
    }
    100% {
      margin-top: 300px;
    }
  }
`;

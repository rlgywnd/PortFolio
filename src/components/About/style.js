import styled from 'styled-components';
import backgroundImg from '../../assets/background.jpeg';
// import backgroundImg2 from '../../assets/background2.JPG';
// import backgroundImg3 from '../../assets/background3.jpeg';

export const AboutContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const ShortAboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* gap: 100px; */
  /* background-color: #4285f4; */
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    // 배경만 투명도 주기
    url(${backgroundImg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  p {
    font-size: 60px;
    color: white;
    font-weight: bold;
    h1 {
      margin-bottom: 20px;
    }
    span {
      font-size: 90px;
      /* padding: 30px 0 30px 0; */
      border-bottom: 13px solid rgb(248, 205, 7);
      display: inline-block;
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
  }
`;
export const ArrowDiv = styled.div`
  position: absolute;
  /* display: inline-block; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 500px; */
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
      margin-top: 500px;
    }
    30% {
      margin-top: 570px;
    }
    40% {
      margin-top: 550px;
    }
    47% {
      margin-top: 565px;
    }
    90% {
      margin-top: 565px;
    }
    100% {
      margin-top: 500px;
    }
  }
`;

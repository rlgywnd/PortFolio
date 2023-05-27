import styled from 'styled-components';
// import backgroundImg from '../../assets/background.jpeg';
import backgroundImg from '../../assets/background4.PNG';

export const AboutContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
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
  background-image: -webkit-linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${backgroundImg});
  background-image: -moz-linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${backgroundImg});
  background-position: center;
  background-size: cover;
  @media (min-width: 400px) {
    background-attachment: fixed;
  }
`;
export const ShortAboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: white;
  font-weight: bold;
  animation: fadeInUp 1.5s;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  @media (max-width: 1100px) {
    font-size: 50px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 55px;
    margin-bottom: 20px;
    @media (max-width: 1100px) {
      font-size: 45px;
    }
    @media (max-width: 500px) {
      font-size: 35px;
    }
  }
  span {
    font-size: 90px;
    border-bottom: ${(props) =>
      props.isdark ? '13px solid rgb(248,206,7)' : '13px solid #3cb371'};
    /* border-bottom: 13px solid #3cb371; */
    text-underline-offset: 3.5px;
    display: inline-block;
    @media (max-width: 1100px) {
      font-size: 75px;
    }
    @media (max-width: 500px) {
      font-size: 60px;
    }
  }
`;
export const ShortAboutTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* font-family: 'NEXON Lv2 Gothic' !important; */
  gap: 10px;
  opacity: 0;
  align-items: center;
  margin-top: 20px;
  color: white;
  font-weight: bold;
  font-size: 25px;
  animation: fadeInUp2 1.5s forwards 1s;
  @keyframes fadeInUp2 {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  @media (max-width: 1100px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
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
  color: white;
  border-top: 15px solid;
  border-right: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid transparent;
  margin-top: 7px;
  margin-left: 7px;
  cursor: pointer;
  animation: fadeInUp 1.5s forwards 1.8s, horizontal 1.5s ease-in infinite;
  opacity: 0;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  @keyframes horizontal {
    0% {
      margin-top: 50px;
    }
    30% {
      margin-top: 80px;
    }
    40% {
      margin-top: 75px;
    }
    47% {
      margin-top: 80px;
    }
    90% {
      margin-top: 80px;
    }
    100% {
      margin-top: 50px;
    }
  }
`;

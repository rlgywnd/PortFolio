import styled from 'styled-components';
import videoImg from '../assets/video4.gif';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: black;
  background: url(${videoImg}) center no-repeat;
  background-size: cover;
`;
export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 300px;
  font-size: 30px;
`;
export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 12.5ch;
  height: 30px;
  font-weight: bold;
  border-right: 2px solid black;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  overflow: hidden;
  @keyframes typing {
    from {
      width: 0;
    }
  }
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
export const LinkDiv = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-decoration-line: none;
  font-weight: bold;
  color: #4285f4;
  :hover {
    transition: all 0.2s linear;
    font-size: 35px;
    color: red;
  }
  :not(:hover) {
    transition: all 0.2s linear;
  }
  :active {
    color: blue;
  }
`;

import styled from 'styled-components';
// import moliImg from '../assets/moli.png';
import videoImg from '../assets/video4.gif';
// import videoImg2 from '../assets/background4.gif';
import { Link } from 'react-router-dom';

/* color: #4285f4; 푸른색  */
/* color: #d6d9dc; 연한회색 */
/* color: #00c988; 민트연두? */
/* color: #ff2f2f; 빨간색 */
/* color: #667085; 회색 */

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
  font-family: ;
`;
export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 25ch;
  height: 30px;
  font-weight: bold;
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
    color: red;
  }
  :active {
    color: blue;
  }
`;

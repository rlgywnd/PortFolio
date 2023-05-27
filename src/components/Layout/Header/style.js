import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.scrollposition === 0 ? 'none' : 'white'};
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 15% 0 15%;
  position: fixed;
  top: 0;
  opacity: 1;
  z-index: 2;
  transition: background-color 0.5s linear;
  @media (max-width: 800px) {
    opacity: 1;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  animation: fadeInUp 1.5s forwards 1.8s;
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
  transition: color 0.5s linear;
  color: ${(props) =>
    props.scrollposition === 0 ? 'rgb(245, 245, 245)' : 'black'};
`;
export const RightDiv = styled.div`
  display: flex;
  gap: 25px;
  animation: fadeInUp 1.5s forwards 1.8s;
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
  div {
    transition: color 0.5s linear;
    color: ${(props) =>
      props.scrollposition === 0 ? 'rgb(245, 245, 245)' : 'black'};
    cursor: pointer;
    :hover {
      transition: color 0.1s linear;
      color: #4285f4;
    }
    :visited {
      color: #4285f4;
    }
    @media (max-width: 800px) {
      display: none;
    }
  }
`;
export const Hamburger = styled.section`
  height: 25px;
  div {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
    cursor: pointer;
  }
  @media (min-width: 801px) {
    display: none;
  }
`;
export const HamburgerOpen = styled.section`
  max-height: 25px;
  div {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
    cursor: pointer;
  }
  ul {
    cursor: pointer;
    display: flex;
    box-sizing: content-box;
    flex-direction: column;
    align-items: flex-end;
    transition: color 0.5s linear;
    color: ${(props) =>
      props.scrollposition === 0 ? 'white' : 'props.isdark ? #a9a9a9 : black'};
    gap: 20px;
    z-index: 2;
    li {
      :hover {
        color: #4285f4;
      }
    }
  }
  @media (min-width: 801px) {
    display: none;
  }
`;

export const HomeBtn = styled(Link)`
  text-decoration-line: none;
  transition: color 0.5s linear;
  color: ${(props) => (props.scrollposition === 0 ? 'white' : 'black')};
  cursor: pointer;
  :hover {
    transition: color 0.1s linear;
    color: #4285f4;
  }
`;

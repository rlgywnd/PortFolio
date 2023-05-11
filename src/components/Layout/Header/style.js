import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  background-color: white;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 15% 0 15%;
  position: fixed;
  top: 0;
  opacity: 0.9;
  /* opacity: 1; */
  z-index: 2;
  @media (max-width: 800px) {
    opacity: 1;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
`;
export const RightDiv = styled.div`
  display: flex;
  gap: 25px;
  div {
    color: black;
    cursor: pointer;
    :hover {
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
  margin-top: ${(props) => (props.hamprop ? '190px' : '30px')};
  top: 0;
  div {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
    cursor: pointer;
  }
  ul {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: gray;
    gap: 20px;
    z-index: 2;
    width: 140px;
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
  color: black;
  cursor: pointer;
  :hover {
    color: #4285f4;
  }
`;

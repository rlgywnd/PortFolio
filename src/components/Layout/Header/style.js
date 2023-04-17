import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5vh;
  padding: 0 15% 0 15%;
  position: sticky;
  top: 0;
  opacity: 0.8;
  /* backdrop-filter: blur(30px); */
  /* position: sticky;
  top: 0; */
  /* position: fixed;
  top: 0;
  left: 0; */
`;

export const RightDiv = styled.div`
  display: flex;
`;
export const LeftDiv = styled.div`
  display: flex;
  gap: 25px;
  div {
    color: black;
    cursor: pointer;
    :hover {
      color: #4285f4;
    }
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

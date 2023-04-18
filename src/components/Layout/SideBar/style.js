import styled from 'styled-components';

// 1100 , 600 에 따라 반응형

export const SideBarReal = styled.div`
  /* display: flex;
  border: 5px solid red; */
  display: grid;
  grid-template-columns: 250px 800px;
`;
export const SideBarContainer = styled.div`
  display: flex;
  word-break: break-all;
  position: sticky;
  top: 0;
  padding: 110px 0 0 30px;
  border: 1px solid red;
  height: 100vh;
  /* height: 100%; */
  @media (max-width: 1100px) {
    display: none;
  }
`;
export const AllComponentsDiv = styled.div`
  /* width: 60vw; */
  width: 65vw;
  padding: 110px 0 0 30px;
  border: 5px solid pink;
  @media (min-width: 1100px) {
  }
  @media() {
  }
  @media() {
  }
  /* @media (min-width: 1800px) {
    width: 800px;
  }
  @media (max-width: 1800px) {

    width: 800px;
  }
  @media (max-width: 1380px) {
    width: 800px;

  }
  @media (max-width: 840px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 412px) {
    width: 100%;
    height: 100%;
    padding: 0 10px 0 10px;
  } */
`;

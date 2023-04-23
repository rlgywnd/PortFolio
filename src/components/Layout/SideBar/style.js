import styled from 'styled-components';

// 1100 , 600 에 따라 반응형

export const SideBarReal = styled.div`
  /* display: flex;
  border: 5px solid red; */
  display: grid;
  grid-template-columns: 250px 800px 50px;
  background-color: rgb(245, 245, 245);
`;
export const SideBarContainer = styled.div`
  display: flex;
  word-break: break-all;
  position: sticky;
  top: 0;
  padding: 110px 0 0 30px;
  height: 100vh;
  ul {
    margin: 0 10px 40px 0;
    h4 {
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    li {
      font-size: 13px;
      color: #667085;
      font-weight: bold;
      list-style-type: disc;
      list-style-position: inside;
      margin-bottom: 5px;
      cursor: pointer;
      :hover {
        color: #d6d9dc;
      }
    }
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;
export const AllComponentsDiv = styled.div`
  width: 65vw;
  padding: 110px 0 0 30px;
`;
export const UpBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  margin: 0 70px 50px 0;
  bottom: 0;
  height: 50px;
  height: 70px;
  width: 70px;
  background-color: #667085;
  border-radius: 50%;
  opacity: 0.6;
  cursor: pointer;
`;

import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  flex: 1;
  /* border: 1px solid blue; */
`;
export const ProjectsTitleH1 = styled.h1`
  display: flex;
  padding: 110px 0 0 0;
  font-size: 70px;
  font-weight: bold;
  @media (max-width: 1100px) {
    font-size: 60px;
  }
  @media (max-width: 500px) {
    font-size: 50px;
  }
`;
export const TitleUnderlineDiv = styled.div`
  border-bottom: 8px solid rgb(248, 205, 7);
  margin-bottom: 80px;
  @media (max-width: 1100px) {
    width: 80vw;
  }
`;

export const ProjectsDiv = styled.div``;

export const ProjectsTypeDiv = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`;
export const ProjectsNameDiv = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const PortFolioDiv = styled.div`
  margin-bottom: 50px;
`;
export const UyouBooDanDiv = styled.div`
  margin-bottom: 50px;
`;
export const BoBeDiv = styled.div`
  margin-bottom: 50px;
`;
export const StackOverDiv = styled.div`
  margin-bottom: 50px;
`;

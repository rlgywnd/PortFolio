import * as S from './style';

import PortFolio from './PortFolio';
import UyouBooDan from './UyouBooDan';
import Bobe from './Bobe';
import Padak from './Padak';

const Projects = () => {
  return (
    <S.ProjectsContainer id='projects'>
      <S.TitleUnderlineDiv>
        <S.ProjectsTitleH1>PROJECTS.</S.ProjectsTitleH1>
      </S.TitleUnderlineDiv>
      <S.ProjectsDiv>
        <PortFolio />
        <UyouBooDan />
        <Bobe />
        <Padak />
      </S.ProjectsDiv>
    </S.ProjectsContainer>
  );
};

export default Projects;

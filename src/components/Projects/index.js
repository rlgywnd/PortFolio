import * as S from './style';

import PortFolio from './PortFolio';
import UyouBooDan from './UyouBooDan';
import Bobe from './Bobe';
import Padak from './Padak';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../../recoil/darkmode';

const Projects = () => {
  const isDark = useRecoilValue(darkmode);

  return (
    <S.ProjectsContainer id='projects'>
      <S.TitleUnderlineDiv isdark={isDark}>
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

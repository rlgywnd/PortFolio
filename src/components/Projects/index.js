import * as S from './style';

const Projects = () => {
  return (
    <S.ProjectsContainer id='projects'>
      <S.TitleUnderlineDiv>
        <S.ProjectsTitleH1>PROJECTS</S.ProjectsTitleH1>
      </S.TitleUnderlineDiv>
      <S.ProjectsDiv>
        <S.PortFolioDiv>
          <S.ProjectsTypeDiv>개인 프로젝트</S.ProjectsTypeDiv>
          <S.ProjectsNameDiv>김효중 포트폴리오</S.ProjectsNameDiv>
        </S.PortFolioDiv>
        <S.UyouBooDanDiv>
          <S.ProjectsTypeDiv>팀 프로젝트</S.ProjectsTypeDiv>
          <S.ProjectsNameDiv>우유부단</S.ProjectsNameDiv>
          <div>
            <div>
              <div>INTRO</div>
              <div>일상 속 결정장애를 위한 공개 투표 서비스</div>
            </div>
            <div>img,gif</div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>사용기술</div>
          <div>관련링크</div>
        </S.UyouBooDanDiv>
        <S.BoBeDiv>
          <S.ProjectsTypeDiv>팀 프로젝트</S.ProjectsTypeDiv>
          <S.ProjectsNameDiv>보배빌림</S.ProjectsNameDiv>
        </S.BoBeDiv>
        <S.StackOverDiv>
          <S.ProjectsTypeDiv>팀 프로젝트</S.ProjectsTypeDiv>
          <S.ProjectsNameDiv>Stack OverFlow 클론</S.ProjectsNameDiv>
        </S.StackOverDiv>
      </S.ProjectsDiv>
    </S.ProjectsContainer>
  );
};

export default Projects;

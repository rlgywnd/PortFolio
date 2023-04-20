import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import uyou from '../../assets/uyou.mp4';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';

const Projects = () => {
  const [uyouMain, setUyouMain] = useState(false);
  const [uyouSign, setUyouSign] = useState(false);
  const [uyouLogin, setUyouLogin] = useState(false);
  const [uyouMyPage, setUyouMyPage] = useState(false);

  return (
    <S.ProjectsContainer id='projects'>
      <S.TitleUnderlineDiv>
        <S.ProjectsTitleH1>PROJECTS.</S.ProjectsTitleH1>
      </S.TitleUnderlineDiv>
      <S.ProjectsDiv>
        <S.PortFolioDiv>
          <S.ProjectsTypeDiv>개인 프로젝트</S.ProjectsTypeDiv>
          <S.ProjectsNameDiv>김효중 포트폴리오</S.ProjectsNameDiv>
        </S.PortFolioDiv>
        <S.UyouBooDanDiv>
          <S.ProjectsTypeDiv>팀 프로젝트</S.ProjectsTypeDiv>
          <S.ProjectsNameDiv>우유부단 : 공개 투표 서비스</S.ProjectsNameDiv>
          <S.IntroAndWorkDetail>
            <S.IntroDateDiv>
              <S.WorkDate>2023년 1월 - 진행중</S.WorkDate>
              <S.IntroDiv>
                <h1>나의 작업 내용</h1>
                <div>
                  <RxCheck size='30' color='rgb(248, 205, 7)' />
                  {/* <RiCheckboxBlankCircleFill
                    size='10'
                    color='rgb(248, 205, 7)'
                  /> */}
                  레이아웃 - 컴포넌트에 공통으로 적용될 레이아웃 틀 구현
                </div>
                <div>
                  <RiCheckboxBlankCircleFill
                    size='10'
                    color='rgb(248, 205, 7)'
                  />
                  회원가입 - 유효성 & 중복검사를 통한 회원가입 기능 구현
                </div>
                <div>
                  <RiCheckboxBlankCircleFill
                    size='10'
                    color='rgb(248, 205, 7)'
                  />
                  로그인 - 일반로그인시 Window저장객체에 따른 로그인유지 기능
                  구현
                </div>
                <div>
                  <RiCheckboxBlankCircleFill
                    size='10'
                    color='rgb(248, 205, 7)'
                  />
                  로그인 - 소셜로그인 기능 구현 (카카오 & 구글)
                </div>
                <div>
                  <RiCheckboxBlankCircleFill
                    size='10'
                    color='rgb(248, 205, 7)'
                  />
                  마이페이지 - 내정보수정 & 나의 [투표, 댓글, 게시글] 보기 기능
                  구현
                </div>
              </S.IntroDiv>
            </S.IntroDateDiv>
            <S.VideoTitleDiv>실제 사용모습</S.VideoTitleDiv>
            <S.VideoContainer>
              <S.VideoTextAndBtn
                uyoumain={uyouMain}
                onClick={() => {
                  setUyouMain(!uyouMain);
                }}
              >
                <S.VideoText>메인화면</S.VideoText>
                <S.VideoUyouMainBtnDiv uyoumain={uyouMain}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.VideoUyouMainBtnDiv>
              </S.VideoTextAndBtn>
              <S.VideoUyouMainDiv uyoumain={uyouMain}>
                <S.UyouMainVideo
                  controls='controls'
                  src={uyou}
                  alt='빔'
                ></S.UyouMainVideo>
              </S.VideoUyouMainDiv>
              {/*  */}
              <S.VideoTextAndBtn
                uyousign={uyouSign}
                onClick={() => {
                  setUyouSign(!uyouSign);
                }}
              >
                {console.log('uyouSign : ', uyouSign)}
                <S.VideoText>회원가입화면</S.VideoText>
                <S.VideoUyouSignBtnDiv uyousign={uyouSign}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.VideoUyouSignBtnDiv>
              </S.VideoTextAndBtn>
              <S.VideoUyouSignDiv uyousign={uyouSign}>
                <S.UyouSignVideo
                  controls='controls'
                  src={uyou}
                  alt='빔'
                ></S.UyouSignVideo>
              </S.VideoUyouSignDiv>
              {/*  */}
              <S.VideoTextAndBtn
                uyoulogin={uyouLogin}
                onClick={() => {
                  setUyouLogin(!uyouLogin);
                }}
              >
                <S.VideoText>로그인화면</S.VideoText>
                <S.VideoUyouLoginBtnDiv uyoulogin={uyouLogin}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.VideoUyouLoginBtnDiv>
              </S.VideoTextAndBtn>
              <S.VideoUyouLoginDiv uyoulogin={uyouLogin}>
                <S.UyouLoginVideo
                  controls='controls'
                  src={uyou}
                  alt='빔'
                ></S.UyouLoginVideo>
              </S.VideoUyouLoginDiv>
              {/*  */}
              <S.VideoTextAndBtn
                uyoumypage={uyouMyPage}
                onClick={() => {
                  setUyouMyPage(!uyouMyPage);
                }}
              >
                <S.VideoText>마이페이지화면</S.VideoText>
                <S.VideoUyouMyPageBtnDiv uyoumypage={uyouMyPage}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.VideoUyouMyPageBtnDiv>
              </S.VideoTextAndBtn>
              <S.VideoUyouMyPageDiv uyoumypage={uyouMyPage}>
                <S.UyouMyPageVideo
                  controls='controls'
                  src={uyou}
                  alt='빔'
                ></S.UyouMyPageVideo>
              </S.VideoUyouMyPageDiv>
            </S.VideoContainer>
          </S.IntroAndWorkDetail>
          {/*  */}
          {/*  */}
          <S.SkillsTitleDiv>사용기술</S.SkillsTitleDiv>
          <S.SkillsContainer>
            <S.SkillsTextDiv>
              <RiCheckboxBlankCircleFill size='10' color='rgb(248, 205, 7)' />
              React
            </S.SkillsTextDiv>
            <S.SkillsDetailDiv>
              UI 개발에 집중할 수 있습니다. 컴포넌트를 이용해서 재사용 가능하고,
              논리적으로 파일을 나누어서 개발 진행을 할 수 있습니다. 또한 JSX
              문법을 이용해서 조금 더 직관적으로 템플릿을 구성할 수 있어서
              사용했습니다. 그리고 커뮤니티가 방대해서 자료 찾기도 편합니다.
            </S.SkillsDetailDiv>

            {/*  */}
            <div>Typescript</div>
            {/*  */}
            <div>Next.JS</div>
            {/*  */}
            <div>Redux</div>
            <div>MSW</div>
            <div>Redux-ToolKit</div>
            <div>Styled-Components</div>
            <div>React-hook-form</div>
            <div>Axios</div>
            <div>ESLint</div>
            <div>Prettier</div>
            <div>Styled-reset</div>
          </S.SkillsContainer>
          <div>
            <div>관련링크</div>
            <div>
              <h5>GIT</h5>
              <div>깃헙URL</div>
            </div>
            <div>
              <h5>관련 블로깅</h5>
              <div>에러핸들링 등 내 블로그 url</div>
            </div>
          </div>
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

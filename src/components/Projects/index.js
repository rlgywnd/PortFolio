import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { AiOutlineLink } from 'react-icons/ai';
import { MdOutlineSmartDisplay } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GrTechnology } from 'react-icons/gr';

import uyoumain from '../../assets/uyoumain.mp4';
// import uyousign from '../../assets/uyousign.mp4';
// import uyoulogin from '../../assets/uyoulogin.mp4';
// import uyoumypage from '../../assets/uyoumypage.mp4';

import { useState } from 'react';

const Projects = () => {
  const uyouDeployUrl =
    'http://uyouboodan-bucket-deploy.s3-website.ap-northeast-2.amazonaws.com/';
  const uyouGitUrl = 'https://github.com/Team-Big-Dipper/UYouBooDan/tree/fe';
  const uyouBlogUrl =
    'https://velog.io/@hyo123/Next.js-localStorage-%EC%97%90%EB%9F%AC%ED%95%B8%EB%93%A4%EB%A7%81';
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
                <h1>작업 내용</h1>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  레이아웃 - 컴포넌트에 공통으로 적용될 레이아웃 틀 구현
                </div>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  회원가입 - 유효성 & 중복검사를 통한 회원가입 기능 구현
                </div>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  로그인 - 일반로그인시 Window저장객체에 따른 로그인유지 기능
                  구현
                </div>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  로그인 - 소셜로그인 기능 구현 (카카오 & 구글)
                </div>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  마이페이지 - 내정보수정 & 나의 [투표, 댓글, 게시글] 보기 기능
                  구현
                </div>
              </S.IntroDiv>
            </S.IntroDateDiv>
            <S.VideoTitleDiv>
              <MdOutlineSmartDisplay size='33' />
              구현모습
            </S.VideoTitleDiv>
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
                  src={uyoumain}
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
                  src={uyoumain}
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
                  src={uyoumain}
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
                  src={uyoumain}
                  alt='빔'
                ></S.UyouMyPageVideo>
              </S.VideoUyouMyPageDiv>
            </S.VideoContainer>
          </S.IntroAndWorkDetail>
          {/*  */}
          {/*  */}
          <S.SkillsTitleDiv>
            <GrTechnology size='25' />
            사용기술
          </S.SkillsTitleDiv>
          <S.SkillsContainer>
            <S.SkillsTextAndDetailDiv>
              <S.SkillsTextDiv>
                <RxCheck size='30' color='#3cb371' />
                React
              </S.SkillsTextDiv>
              React는 Component를 이용하여 재사용이 가능하고, 유지보수의
              용이함이있습니다.
              <br /> 많은 커뮤니티가 있어, 자료가 굉장히 방대합니다.
            </S.SkillsTextAndDetailDiv>

            {/*  */}
            <S.SkillsTextAndDetailDiv>
              <S.SkillsTextDiv>
                <RxCheck size='30' color='#3cb371' />
                TypeScript
              </S.SkillsTextDiv>
              TypeScript는 코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나
              함수들에서 에러를 발생시켜 버그를 사전에 제거합니다.
            </S.SkillsTextAndDetailDiv>
            {/*  */}
            <S.SkillsTextAndDetailDiv>
              <S.SkillsTextDiv>
                <RxCheck size='30' color='#3cb371' />
                Next.JS
              </S.SkillsTextDiv>
              Next.JS는 React에서 Rendering을 쉽게 할 수 있게 해주는
              프레임워크입니다.
              <br />
              서버사이드렌더링(SSR) 방식이라 몇가지 에러가 많았지만, SSR만의
              장점이 많은 프레임워크입니다.
            </S.SkillsTextAndDetailDiv>
            {/*  */}
            <S.SkillsTextAndDetailDiv>
              <S.SkillsTextDiv>
                <RxCheck size='30' color='#3cb371' />
                Redux-Toolkit
              </S.SkillsTextDiv>
              Redux는 전역에서 상태를 관리하게 해주는 라이브러리입니다.
              <br /> Redux-Toolkit은 Redux의 단점들을 보완해주며 Redux보다 더욱
              간단하게 쓸 수 있게 해줍니다.
            </S.SkillsTextAndDetailDiv>
            <S.SkillsTextAndDetailDiv>
              <S.SkillsTextDiv>
                <RxCheck size='30' color='#3cb371' />
                MSW
              </S.SkillsTextDiv>
              MSW(Mock Service Worker)는 Mock서버를 구현하지않고도,
              <br /> 네트워크 수준에서 API를 Mocking 할 수 있습니다. <br />
              백엔드에서 API가 나오기전에 프론트에서 먼저 HTTP통신을 해 볼 수
              있었습니다.
            </S.SkillsTextAndDetailDiv>
            <S.SkillsTextAndDetailDiv>
              <S.SkillsTextDiv>
                <RxCheck size='30' color='#3cb371' />
                Styled-Components
              </S.SkillsTextDiv>
              Styled-Components는 CSS 파일을 밖에 두지 않고, 컴포넌트 내부에
              넣기 때문에,
              <br /> CSS가 전역으로 중첩되지 않도록 만들어주는 장점이 있습니다.
            </S.SkillsTextAndDetailDiv>
            <S.SkillsTextAndDetailDiv>
              <S.SkillsTextDiv>
                <RxCheck size='30' color='#3cb371' />
                React-Hook-Form
              </S.SkillsTextDiv>
              React-hook-form은 회원가입, 로그인 페이지에서 입력창과
              유효성검사를 더욱 간편하게 만들어주는 라이브러리입니다.
            </S.SkillsTextAndDetailDiv>
            <S.SkillsTextAndDetailDiv>
              <S.SkillsTextDiv>
                <RxCheck size='30' color='#3cb371' />
                Axios
              </S.SkillsTextDiv>
              Axios는 Node.js와 브라우저를 위한 Promise API를 활용하는 HTTP 통신
              라이브러리 입니다. fetch를 사용하는 것 보다 코드를 간결하게 쓸 수
              있어서 좋았습니다.
            </S.SkillsTextAndDetailDiv>
          </S.SkillsContainer>
          <S.LinkTitleDiv>
            <AiOutlineLink size='30' />
            관련링크
          </S.LinkTitleDiv>
          <S.UyouLinkContainer>
            <S.UyouLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(uyouDeployUrl);
                  }}
                >
                  <h1>우유부단 배포 사이트</h1>
                </span>
              </div>
            </S.UyouLinkTextDiv>
            <S.UyouLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(uyouGitUrl);
                  }}
                >
                  <h2>깃헙 Repository</h2>
                </span>
              </div>
            </S.UyouLinkTextDiv>
            <S.UyouLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(uyouBlogUrl);
                  }}
                >
                  <h3>
                    Next.JS에서 window객체 사용시 트러블슈팅 관련 블로그 포스팅
                  </h3>
                </span>
              </div>
            </S.UyouLinkTextDiv>
          </S.UyouLinkContainer>
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

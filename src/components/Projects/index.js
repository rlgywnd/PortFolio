import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { AiOutlineLink } from 'react-icons/ai';
import { MdOutlineSmartDisplay } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GrTechnology } from 'react-icons/gr';

import uyoumain from '../../assets/uyoumain.mp4';
import uyousign from '../../assets/uyousign.mp4';
import uyoulogin from '../../assets/uyoulogin.mp4';
import uyoumypage from '../../assets/uyoumypage.mp4';

import bobemain from '../../assets/bobemain.mp4';
import bobesign from '../../assets/bobesign.mp4';
import bobelogin from '../../assets/bobelogin.mp4';
import bobemypage from '../../assets/bobemypage.mp4';

import { useState } from 'react';

const Projects = () => {
  const uyouDeployUrl =
    'http://uyouboodan-bucket-deploy.s3-website.ap-northeast-2.amazonaws.com/';
  const uyouGitUrl = 'https://github.com/Team-Big-Dipper/UYouBooDan/tree/fe';
  const uyouBlogUrl =
    'https://velog.io/@hyo123/Next.js-localStorage-%EC%97%90%EB%9F%AC%ED%95%B8%EB%93%A4%EB%A7%81';
  const bobeGitUrl = 'https://github.com/codestates-seb/seb40_main_030';
  const bobeNotionUrl =
    'https://www.notion.so/codestates/8e43f8220bae4542b0ae84d8caa06b5a';
  const bobeInterViewUrl = 'https://www.youtube.com/watch?v=yOCwQrxzy6U';
  const bobeDeployUrl =
    'http://battery-bucket-deploy.s3-website.ap-northeast-2.amazonaws.com/';
  const bobeBlogUrl = 'https://velog.io/@hyo123/%EB%A1%9C%EA%B7%B8%EC%9D%B8';
  const padakDeployUrl =
    'http://padakmon-client-bucket.s3-website.ap-northeast-2.amazonaws.com/';
  const padakGitUrl = 'https://github.com/codestates-seb/seb40_pre_003';
  const padakDemoUrl = 'https://www.youtube.com/watch?v=T6uEMcfgvec';
  const portGitUrl = 'https://github.com/rlgywnd/PortFolio';
  const portBlogUrl =
    'https://velog.io/@hyo123/Deploy-AWS-S3-%EC%A0%95%EC%A0%81-%EC%9B%B9-%ED%98%B8%EC%8A%A4%ED%8C%85';
  // 버튼 열고닫기 state
  const [uyouMain, setUyouMain] = useState(false);
  const [uyouSign, setUyouSign] = useState(false);
  const [uyouLogin, setUyouLogin] = useState(false);
  const [uyouMyPage, setUyouMyPage] = useState(false);
  const [bobeMain, setBobeMain] = useState(false);
  const [bobeSign, setBobeSign] = useState(false);
  const [bobeLogin, setBobeLogin] = useState(false);
  const [bobeMyPage, setBobeMyPage] = useState(false);

  return (
    <S.ProjectsContainer id='projects'>
      <S.TitleUnderlineDiv>
        <S.ProjectsTitleH1>PROJECTS.</S.ProjectsTitleH1>
      </S.TitleUnderlineDiv>
      <S.ProjectsDiv>
        <S.PortFolioDiv id='pj_portfolio'>
          <S.MarginDiv></S.MarginDiv>
          <S.ProjectsTypeDiv>개인 프로젝트</S.ProjectsTypeDiv>
          <S.ProjectsNameDiv>김효중 포트폴리오</S.ProjectsNameDiv>
          <S.IntroAndWorkDetail>
            <S.IntroDateDiv>
              <S.IntroDiv>
                <h1>서비스 소개</h1>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  김효중의 포트폴리오입니다.
                </div>
                <h1>작업 내용</h1>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  SideBar & HeaderBar 구현
                </div>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  React-Scroll 사용하여 스크롤 이벤트 구현
                </div>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  UI/UX 반응형 & 애니메이션 구현
                </div>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  AWS S3 정적 웹 호스팅
                </div>
              </S.IntroDiv>
            </S.IntroDateDiv>
          </S.IntroAndWorkDetail>
          <S.LinkTitleDiv>
            <AiOutlineLink size='30' />
            관련링크
          </S.LinkTitleDiv>
          <S.PortLinkContainer>
            <S.PortLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(portGitUrl);
                  }}
                >
                  <h2>깃헙 Repository</h2>
                </span>
              </div>
            </S.PortLinkTextDiv>
            <S.PortLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(portBlogUrl);
                  }}
                >
                  <h1>AWS S3 정적 웹 호스팅 블로그 포스팅</h1>
                </span>
              </div>
            </S.PortLinkTextDiv>
          </S.PortLinkContainer>
        </S.PortFolioDiv>
        <S.UyouBooDanDiv id='pj_uyou'>
          <S.MarginDiv></S.MarginDiv>
          <S.ProjectsTypeDiv>팀 프로젝트</S.ProjectsTypeDiv>
          <S.ProjectsNameDiv>우유부단 : 공개 투표 서비스</S.ProjectsNameDiv>
          <S.IntroAndWorkDetail>
            <S.IntroDateDiv>
              <S.WorkDate>2023년 1월 - 진행중</S.WorkDate>
              <S.IntroDiv>
                <h1>서비스 소개</h1>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  현대인들의 결정장애를 해결하기 위한 공개적인 투표
                  서비스입니다.
                </div>
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
                <S.VideoText>회원가입화면</S.VideoText>
                <S.VideoUyouSignBtnDiv uyousign={uyouSign}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.VideoUyouSignBtnDiv>
              </S.VideoTextAndBtn>
              <S.VideoUyouSignDiv uyousign={uyouSign}>
                <S.UyouSignVideo
                  controls='controls'
                  src={uyousign}
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
                  src={uyoulogin}
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
                  src={uyoumypage}
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
        <S.BoBeDiv id='pj_bobe'>
          <S.MarginDiv></S.MarginDiv>
          <S.ProjectsTypeDiv>팀 프로젝트</S.ProjectsTypeDiv>
          <S.ProjectsNameDiv>
            보배빌림 : 전기차 보조베터리 대여 서비스
          </S.ProjectsNameDiv>
          <S.IntroAndWorkDetail>
            <S.IntroDateDiv>
              <S.WorkDate>2022년 11월</S.WorkDate>
              <S.IntroDiv>
                <h1>서비스 소개</h1>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  전기차 충전 고충을 덜어드리는 전기차 보조배터리 대여
                  서비스입니다.
                </div>
                <h1>작업 내용</h1>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  회원가입 - 유효성 & 중복검사를 통한 일반 & 관리자 회원가입
                  기능
                </div>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  주소찾기 - 회원가입 & 내정보수정에서 주소를 찾고 등록 기능
                </div>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  로그인 - Window저장객체에 따른 로그인유지 & 관리자로그인 기능
                </div>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  마이페이지 - 내정보수정 & 나의 대여정보 확인 기능
                </div>
              </S.IntroDiv>
            </S.IntroDateDiv>
            <S.VideoTitleDiv>
              <MdOutlineSmartDisplay size='33' />
              구현모습
            </S.VideoTitleDiv>
            <S.VideoContainer>
              <S.VideoTextAndBtn
                bobemain={bobeMain}
                onClick={() => {
                  setBobeMain(!bobeMain);
                }}
              >
                <S.VideoText>메인화면</S.VideoText>
                <S.VideoBobeMainBtnDiv bobemain={bobeMain}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.VideoBobeMainBtnDiv>
              </S.VideoTextAndBtn>
              <S.VideoBobeMainDiv bobemain={bobeMain}>
                <S.BobeMainVideo
                  controls='controls'
                  src={bobemain}
                  alt='빔'
                ></S.BobeMainVideo>
              </S.VideoBobeMainDiv>
              {/*  */}
              <S.VideoTextAndBtn
                bobesign={bobeSign}
                onClick={() => {
                  setBobeSign(!bobeSign);
                }}
              >
                <S.VideoText>회원가입화면</S.VideoText>
                <S.VideoBobeSignBtnDiv bobesign={bobeSign}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.VideoBobeSignBtnDiv>
              </S.VideoTextAndBtn>
              <S.VideoBobeSignDiv bobesign={bobeSign}>
                <S.BobeSignVideo
                  controls='controls'
                  src={bobesign}
                  alt='빔'
                ></S.BobeSignVideo>
              </S.VideoBobeSignDiv>
              {/*  */}
              <S.VideoTextAndBtn
                bobelogin={bobeLogin}
                onClick={() => {
                  setBobeLogin(!bobeLogin);
                }}
              >
                <S.VideoText>로그인화면</S.VideoText>
                <S.VideoBobeLoginBtnDiv bobelogin={bobeLogin}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.VideoBobeLoginBtnDiv>
              </S.VideoTextAndBtn>
              <S.VideoBobeLoginDiv bobelogin={bobeLogin}>
                <S.BobeLoginVideo
                  controls='controls'
                  src={bobelogin}
                  alt='빔'
                ></S.BobeLoginVideo>
              </S.VideoBobeLoginDiv>
              {/*  */}
              <S.VideoTextAndBtn
                bobemypage={bobeMyPage}
                onClick={() => {
                  setBobeMyPage(!bobeMyPage);
                }}
              >
                <S.VideoText>마이페이지화면</S.VideoText>
                <S.VideoBobeMyPageBtnDiv bobemypage={bobeMyPage}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.VideoBobeMyPageBtnDiv>
              </S.VideoTextAndBtn>
              <S.VideoBobeMyPageDiv bobemypage={bobeMyPage}>
                <S.BobeMyPageVideo
                  controls='controls'
                  src={bobemypage}
                  alt='빔'
                ></S.BobeMyPageVideo>
              </S.VideoBobeMyPageDiv>
              {/* {} */}
            </S.VideoContainer>
          </S.IntroAndWorkDetail>
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
                Vite
              </S.SkillsTextDiv>
              Vite는 Esbuild를 기반으로 만들어진 빌드툴 입니다.
              <br />
              CRA는 Javascript로 구성된 Webpack을 사용하는데 속도가 느립니다.
              <br /> Vite는 위와같은 단점을 해결해줍니다.
            </S.SkillsTextAndDetailDiv>
            {/* {} */}
            <S.SkillsTextAndDetailDiv>
              <S.SkillsTextDiv>
                <RxCheck size='30' color='#3cb371' />
                Daum-PostCode
              </S.SkillsTextDiv>
              Daum-PostCode는 주소 찾기를 도와주는 라이브러리입니다.
              <br />
              npm으로 react전용 Daum-PostCode를 설치하여 사용할 수 있습니다.
            </S.SkillsTextAndDetailDiv>
            {/*  */}
            <S.SkillsTextAndDetailDiv>
              <S.SkillsTextDiv>
                <RxCheck size='30' color='#3cb371' />
                Recoil
              </S.SkillsTextDiv>
              Recoil은 전역 상태를 관리하기 위해 사용하는 라이브러리입니다.
              <br />
              Redux의 번거로운 초기세팅을 하지 않고 훨씬 쉽게 세팅하고
              <br />
              사용할 수 있어서 사용하기 쉬운 전역상태관리 라이브러리였습니다.
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
          <S.BobeLinkContainer>
            <S.BobeLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(bobeDeployUrl);
                  }}
                >
                  <h1>보배빌림 배포 사이트</h1>
                </span>
              </div>
            </S.BobeLinkTextDiv>
            <S.BobeLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(bobeGitUrl);
                  }}
                >
                  <h2>깃헙 Repository</h2>
                </span>
              </div>
            </S.BobeLinkTextDiv>
            <S.BobeLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(bobeInterViewUrl);
                  }}
                >
                  <h3>보배빌림 팀 인터뷰영상</h3>
                </span>
              </div>
            </S.BobeLinkTextDiv>
            <S.BobeLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(bobeNotionUrl);
                  }}
                >
                  <h4>보배빌림 Notion</h4>
                </span>
              </div>
            </S.BobeLinkTextDiv>
            <S.BobeLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(bobeBlogUrl);
                  }}
                >
                  <h5>Window저장객체 관련 로그인구현 블로그 포스팅</h5>
                </span>
              </div>
            </S.BobeLinkTextDiv>
          </S.BobeLinkContainer>
        </S.BoBeDiv>
        {/* {} */}
        <S.StackOverDiv id='pj_stack'>
          <S.MarginDiv></S.MarginDiv>
          <S.ProjectsTypeDiv>팀 프로젝트</S.ProjectsTypeDiv>
          <S.ProjectsNameDiv>Stack OverFlow 클론</S.ProjectsNameDiv>
          <S.IntroAndWorkDetail>
            <S.IntroDateDiv>
              <S.WorkDate>2022년 10월</S.WorkDate>
              <S.IntroDiv>
                <h1>서비스 소개</h1>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  Stack OverFlow 클론 코딩한 서비스입니다.
                </div>
                <h1>작업 내용</h1>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  메인페이지 - 카테고리 별 글 리스트들이 보이게 구현
                </div>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  작성페이지 - Toast Editor를 사용한 글 작성 기능 구현
                </div>
                <div>
                  <RxCheck size='30' color='#3cb371' />
                  검색창 - [단어] 옵션을 이용한 단어 관련 검색기능 구현
                </div>
              </S.IntroDiv>
            </S.IntroDateDiv>
          </S.IntroAndWorkDetail>
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
            {/* {} */}
            <S.SkillsTextAndDetailDiv>
              <S.SkillsTextDiv>
                <RxCheck size='30' color='#3cb371' />
                Redux
              </S.SkillsTextDiv>
              Redux는 전역에서 상태를 관리하게 해주는 라이브러리입니다.
              <br />
              Action - Dispatch - Reducer - Store 순서로 데이터를 단방향으로
              <br />
              전달하며 상태가 변경되면 React는 다시 렌더링을 시켜주는 다소
              복잡한 방식입니다.
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
          <S.PadakLinkContainer>
            <S.PadakLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(padakDeployUrl);
                  }}
                >
                  <h1>클론코딩 배포 사이트</h1>
                </span>
              </div>
            </S.PadakLinkTextDiv>
            <S.PadakLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(padakGitUrl);
                  }}
                >
                  <h2>깃헙 Repository</h2>
                </span>
              </div>
            </S.PadakLinkTextDiv>
            <S.PadakLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(padakDemoUrl);
                  }}
                >
                  <h3>클론코딩 Demo</h3>
                </span>
              </div>
            </S.PadakLinkTextDiv>
          </S.PadakLinkContainer>
        </S.StackOverDiv>
      </S.ProjectsDiv>
    </S.ProjectsContainer>
  );
};

export default Projects;

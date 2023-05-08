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

import { portGitUrl, portBlogUrl } from 'constants/url';
import {
  uyouBlogUrl,
  uyouGitUrl,
  uyouWorkBlogUrl,
  uyouDeployUrl,
  uyouNaverBlogUrl,
} from 'constants/url';
import {
  bobeDeployUrl,
  bobeBlogUrl,
  bobeGitUrl,
  bobeNotionUrl,
  bobeInterViewUrl,
  bobeWorkBlogUrl,
} from 'constants/url';
import { padakDemoUrl, padakGitUrl, padakDeployUrl } from 'constants/url';

const Projects = () => {
  // 구현모습쪽 버튼 열고닫기 state
  const [uyouMain, setUyouMain] = useState(false);
  const [uyouSign, setUyouSign] = useState(false);
  const [uyouLogin, setUyouLogin] = useState(false);
  const [uyouMyPage, setUyouMyPage] = useState(false);
  const [bobeMain, setBobeMain] = useState(false);
  const [bobeSign, setBobeSign] = useState(false);
  const [bobeLogin, setBobeLogin] = useState(false);
  const [bobeMyPage, setBobeMyPage] = useState(false);

  // 스킬셋쪽 버튼 열고닫기 state
  const [uyouReact, setUyouReact] = useState(false);
  const [uyouType, setUyouType] = useState(false);
  const [uyouNext, setUyouNext] = useState(false);
  const [uyouToolkit, setUyouToolkit] = useState(false);
  const [uyouMsw, setUyouMsw] = useState(false);
  const [uyouStyled, setUyouStyled] = useState(false);
  const [uyouHook, setUyouHook] = useState(false);
  const [uyouAxios, setUyouAxios] = useState(false);

  const [bobeReact, setBobeReact] = useState(false);
  const [bobeVite, setBobeVite] = useState(false);
  const [bobeDaum, setBobeDaum] = useState(false);
  const [bobeRecoil, setBobeRecoil] = useState(false);
  const [bobeMsw, setBobeMsw] = useState(false);
  const [bobeStyled, setBobeStyled] = useState(false);
  const [bobeHook, setBobeHook] = useState(false);
  const [bobeAxios, setBobeAxios] = useState(false);

  const [padakReact, setPadakReact] = useState(false);
  const [padakRedux, setPadakRedux] = useState(false);
  const [padakStyled, setPadakStyled] = useState(false);
  const [padakAxios, setPadakAxios] = useState(false);

  const [portReact, setPortReact] = useState(false);
  const [portRouter, setPortRouter] = useState(false);
  const [portScrol, setPortScrol] = useState(false);
  const [portStyled, setPortStyled] = useState(false);

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
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  김효중의 개인 포트폴리오
                </h2>
                <h1>작업 내용</h1>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  SideBar & HeaderBar 구현
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  React-Scroll 사용하여 스크롤 이벤트 구현
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  UI/UX 반응형 & 애니메이션 구현
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  AWS S3 정적 웹 호스팅
                </h2>
              </S.IntroDiv>
            </S.IntroDateDiv>
          </S.IntroAndWorkDetail>
          {/* {} */}
          <S.SkillsTitleDiv>
            <GrTechnology size='25' />
            사용기술
          </S.SkillsTitleDiv>
          <S.SkillsContainer>
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                portreact={portReact}
                onClick={() => {
                  setPortReact(!portReact);
                }}
              >
                <S.SkillName>React</S.SkillName>
                <S.PortReactBtnDiv portreact={portReact}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.PortReactBtnDiv>
              </S.SkillsTextAndBtn>
              <S.PortReactTextDiv portreact={portReact}>
                <S.PortReact>
                  React는 Component를 이용하여 재사용이 가능하고, 유지보수
                  하기에도 좋았습니다. 또한 자료가 굉장히 방대하여 문제해결에도
                  좋았습니다.
                </S.PortReact>
              </S.PortReactTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                portrouter={portRouter}
                onClick={() => {
                  setPortRouter(!portRouter);
                }}
              >
                <S.SkillName>React Router Dom</S.SkillName>
                <S.PortRouterBtnDiv portrouter={portRouter}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.PortRouterBtnDiv>
              </S.SkillsTextAndBtn>
              <S.PortRouterTextDiv portrouter={portRouter}>
                <S.PortRouter>
                  React Router Dom은 SPA(Single Page Application) 즉, 전체
                  페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가며
                  표현하게 해주는 라이브러리입니다. 이번 프로젝트에선 한
                  화면에서 모든 페이지를 스크롤하게 만들었기때문에 라우팅을
                  사용한게 첫화면에서 한번 뿐 이지만 SPA를 구현하기에 좋은
                  라이브러리입니다.
                </S.PortRouter>
              </S.PortRouterTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                portscrol={portScrol}
                onClick={() => {
                  setPortScrol(!portScrol);
                }}
              >
                <S.SkillName>React Scroll</S.SkillName>
                <S.PortScrolBtnDiv portscrol={portScrol}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.PortScrolBtnDiv>
              </S.SkillsTextAndBtn>
              <S.PortScrolTextDiv portscrol={portScrol}>
                <S.PortScrol>
                  React Scroll은 링크를 걸어두어 태그의 id값을 확인해 스크롤
                  이동시켜주게 도와주는 라이브러리입니다. 라이브러리 설치후
                  Router Link말고 scroll Link를 import해서 사용하는
                  방식이었습니다. Link에 경로 지정해두고 위치할 태그에 id값을
                  넣어주면 돼서 사용하기 편했습니다.
                </S.PortScrol>
              </S.PortScrolTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                portstyled={portStyled}
                onClick={() => {
                  setPortStyled(!portStyled);
                }}
              >
                <S.SkillName>Styled Components</S.SkillName>
                <S.PortStyledBtnDiv portstyled={portStyled}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.PortStyledBtnDiv>
              </S.SkillsTextAndBtn>
              <S.PortStyledTextDiv portstyled={portStyled}>
                <S.PortStyled>
                  Styled Components는 자바스크립트 안에 CSS를 작성하는 CSS-in-JS
                  방식인 라이브러리입니다. React props를 활용한 조건부
                  스타일링이 가능하기도해서 좋았습니다.
                </S.PortStyled>
              </S.PortStyledTextDiv>
            </S.SkillsSection>
          </S.SkillsContainer>
          {/* {} */}
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
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  현대인들의 결정장애를 해결하기 위한 공개투표 서비스
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  프론트 3명 & 백엔드 3명 & 웹디자이너 1명 협업
                </h2>
                <h1>작업 내용</h1>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  레이아웃 - 컴포넌트에 공통으로 적용될 레이아웃 틀
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  회원가입 - 유효성 & 중복검사를 통한 회원가입 기능
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  로그인 - Window저장객체에 따른 로그인유지 기능
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  로그인 - OAuth방식 소셜로그인 기능 구현 (카카오/구글/네이버)
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  마이페이지 - 내정보수정 & 나의 게시글 보기 기능
                </h2>
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
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                uyoureact={uyouReact}
                onClick={() => {
                  setUyouReact(!uyouReact);
                }}
              >
                <S.SkillName>React</S.SkillName>
                <S.UyouReactBtnDiv uyoureact={uyouReact}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.UyouReactBtnDiv>
              </S.SkillsTextAndBtn>
              <S.UyouReactTextDiv uyoureact={uyouReact}>
                <S.UyouReact>
                  React는 Component를 이용하여 재사용이 가능하고, 유지보수
                  하기에도 좋았습니다. 또한 자료가 굉장히 방대하여 문제해결에도
                  좋았습니다.
                </S.UyouReact>
              </S.UyouReactTextDiv>
            </S.SkillsSection>

            {/*  */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                uyoutype={uyouType}
                onClick={() => {
                  setUyouType(!uyouType);
                }}
              >
                <S.SkillName>TypeScript</S.SkillName>
                <S.UyouTypeBtnDiv uyoutype={uyouType}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.UyouTypeBtnDiv>
              </S.SkillsTextAndBtn>
              <S.UyouTypeTextDiv uyoutype={uyouType}>
                <S.UyouType>
                  TypeScript는 코드에 타입을 명시하고 목적에 맞지 않는 타입의
                  변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거 할 수
                  있었습니다.
                </S.UyouType>
              </S.UyouTypeTextDiv>
            </S.SkillsSection>

            {/*  */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                uyounext={uyouNext}
                onClick={() => {
                  setUyouNext(!uyouNext);
                }}
              >
                <S.SkillName>Next.JS</S.SkillName>
                <S.UyouNextBtnDiv uyounext={uyouNext}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.UyouNextBtnDiv>
              </S.SkillsTextAndBtn>
              <S.UyouNextTextDiv uyounext={uyouNext}>
                <S.UyouNext>
                  Next.JS는 React 라이브러리의 프레임워크입니다. 직관적인 페이지
                  기반 라우팅 시스템이있어서 /pages 폴더에서 컴포넌트를
                  export하면 페이지 Route가 돼서 라우팅에 편리했습니다.
                </S.UyouNext>
              </S.UyouNextTextDiv>
            </S.SkillsSection>

            {/*  */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                uyoutoolkit={uyouToolkit}
                onClick={() => {
                  setUyouToolkit(!uyouToolkit);
                }}
              >
                <S.SkillName>Redux Toolkit</S.SkillName>
                <S.UyouToolkitBtnDiv uyoutoolkit={uyouToolkit}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.UyouToolkitBtnDiv>
              </S.SkillsTextAndBtn>
              <S.UyouToolkitTextDiv uyoutoolkit={uyouToolkit}>
                <S.UyouToolkit>
                  Redux Toolkit은 react의 전역상태관리 라이브러리입니다. Redux
                  Toolkit은 Redux의 단점들을 보완해주며 특히 Redux 스토어의
                  복잡한 환경설정 세팅을 간단하게 쓸 수 있어서 좋았습니다.
                </S.UyouToolkit>
              </S.UyouToolkitTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                uyoumsw={uyouMsw}
                onClick={() => {
                  setUyouMsw(!uyouMsw);
                }}
              >
                <S.SkillName>MSW</S.SkillName>
                <S.UyouMswBtnDiv uyoumsw={uyouMsw}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.UyouMswBtnDiv>
              </S.SkillsTextAndBtn>
              <S.UyouMswTextDiv uyoumsw={uyouMsw}>
                <S.UyouMsw>
                  MSW(Mock Service Worker)는 Mock서버를 구현하지않고도, 네트워크
                  수준에서 API를 Mocking 할 수 있습니다. 백엔드에서 API가
                  나오기전에 프론트에서 먼저 HTTP통신을 해 볼 수 있었습니다.
                </S.UyouMsw>
              </S.UyouMswTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                uyoustyled={uyouStyled}
                onClick={() => {
                  setUyouStyled(!uyouStyled);
                }}
              >
                <S.SkillName>Styled Components</S.SkillName>
                <S.UyouStyledBtnDiv uyoustyled={uyouStyled}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.UyouStyledBtnDiv>
              </S.SkillsTextAndBtn>
              <S.UyouStyledTextDiv uyoustyled={uyouStyled}>
                <S.UyouStyled>
                  Styled Components는 자바스크립트 안에 CSS를 작성하는 CSS-in-JS
                  방식인 라이브러리입니다. React props를 활용한 조건부
                  스타일링이 가능하기도해서 좋았습니다.
                </S.UyouStyled>
              </S.UyouStyledTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                uyouhook={uyouHook}
                onClick={() => {
                  setUyouHook(!uyouHook);
                }}
              >
                <S.SkillName>React Hook Form</S.SkillName>
                <S.UyouHookBtnDiv uyouhook={uyouHook}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.UyouHookBtnDiv>
              </S.SkillsTextAndBtn>
              <S.UyouHookTextDiv uyouhook={uyouHook}>
                <S.UyouHook>
                  React Hook Form은 회원가입, 로그인 페이지에서 입력창과
                  유효성검사를 더욱 효과적이고 간편하게 도와주는
                  라이브러리입니다. 데이터 전송관리하기에도 편해서 좋았습니다.
                </S.UyouHook>
              </S.UyouHookTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                uyouaxios={uyouAxios}
                onClick={() => {
                  setUyouAxios(!uyouAxios);
                }}
              >
                <S.SkillName>Axios</S.SkillName>
                <S.UyouAxiosBtnDiv uyouaxios={uyouAxios}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.UyouAxiosBtnDiv>
              </S.SkillsTextAndBtn>
              <S.UyouAxiosTextDiv uyouaxios={uyouAxios}>
                <S.UyouAxios>
                  Axios는 Node.js와 브라우저를 위한 Promise API를 활용하는 HTTP
                  통신 라이브러리 입니다. fetch를 사용하는 것 보다 코드를
                  간결하게 쓸 수 있어서 좋았습니다.
                </S.UyouAxios>
              </S.UyouAxiosTextDiv>
            </S.SkillsSection>
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
            <S.UyouLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(uyouWorkBlogUrl);
                  }}
                >
                  <h4>우유부단 작업내용정리 블로그 포스팅</h4>
                </span>
              </div>
            </S.UyouLinkTextDiv>
            <S.UyouLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(uyouNaverBlogUrl);
                  }}
                >
                  <h5>소셜 로그인 구현 블로그 포스팅</h5>
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
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  전기차 충전 고충에 덜어드리는 전기차 보조배터리 대여 서비스
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  프론트 4명 & 백엔드 3명 협업
                </h2>
                <h1>작업 내용</h1>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  회원가입 - 유효성 & 중복검사를 통한 회원가입 기능
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  주소찾기 - 회원가입 & 내정보수정에서 주소를 찾기 기능
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  로그인 - Window저장객체에 따른 로그인유지 기능
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  마이페이지 - 내정보수정 & 나의 대여정보 확인 기능
                </h2>
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
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                bobereact={bobeReact}
                onClick={() => {
                  setBobeReact(!bobeReact);
                }}
              >
                <S.SkillName>React</S.SkillName>
                <S.BobeReactBtnDiv bobereact={bobeReact}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.BobeReactBtnDiv>
              </S.SkillsTextAndBtn>
              <S.BobeReactTextDiv bobereact={bobeReact}>
                <S.BobeReact>
                  React는 Component를 이용하여 재사용이 가능하고, 유지보수
                  하기에도 좋았습니다. 또한 자료가 굉장히 방대하여 문제해결에도
                  좋았습니다.
                </S.BobeReact>
              </S.BobeReactTextDiv>
            </S.SkillsSection>

            {/*  */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                bobevite={bobeVite}
                onClick={() => {
                  setBobeVite(!bobeVite);
                }}
              >
                <S.SkillName>Vite</S.SkillName>
                <S.BobeViteBtnDiv bobevite={bobeVite}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.BobeViteBtnDiv>
              </S.SkillsTextAndBtn>
              <S.BobeViteTextDiv bobevite={bobeVite}>
                <S.BobeVite>
                  Vite는 프랑스어로 빠르다를 의미하는데 말그대로 굉장히 빠른
                  빌드 속도를 보여줍니다. CRA는 Javascript로 구성된 Webpack으로
                  빌드하는데 속도가 느립니다. CRA 웹팩빌드와 비교했을때 정말
                  빨랐습니다.
                </S.BobeVite>
              </S.BobeViteTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                bobedaum={bobeDaum}
                onClick={() => {
                  setBobeDaum(!bobeDaum);
                }}
              >
                <S.SkillName>Daum PostCode</S.SkillName>
                <S.BobeDaumBtnDiv bobedaum={bobeDaum}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.BobeDaumBtnDiv>
              </S.SkillsTextAndBtn>
              <S.BobeDaumTextDiv bobedaum={bobeDaum}>
                <S.BobeDaum>
                  Daum PostCode는 주소 찾기를 도와주는 라이브러리입니다. npm으로
                  react전용 Daum PostCode를 설치하여 사용할 수 있었습니다.
                </S.BobeDaum>
              </S.BobeDaumTextDiv>
            </S.SkillsSection>

            {/*  */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                boberecoil={bobeRecoil}
                onClick={() => {
                  setBobeRecoil(!bobeRecoil);
                }}
              >
                <S.SkillName>Recoil</S.SkillName>
                <S.BobeRecoilBtnDiv boberecoil={bobeRecoil}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.BobeRecoilBtnDiv>
              </S.SkillsTextAndBtn>
              <S.BobeRecoilTextDiv boberecoil={bobeRecoil}>
                <S.BobeRecoil>
                  Recoil은 전역 상태를 관리하기 위해 사용하는 라이브러리입니다.
                  Redux의 번거로운 초기세팅을 하지 않고 훨씬 쉽게 세팅하고
                  사용할 수 있어서 사용하기 쉬운 전역상태관리
                  라이브러리였습니다.
                </S.BobeRecoil>
              </S.BobeRecoilTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                bobemsw={bobeMsw}
                onClick={() => {
                  setBobeMsw(!bobeMsw);
                }}
              >
                <S.SkillName>MSW</S.SkillName>
                <S.BobeMswBtnDiv bobemsw={bobeMsw}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.BobeMswBtnDiv>
              </S.SkillsTextAndBtn>
              <S.BobeMswTextDiv bobemsw={bobeMsw}>
                <S.BobeMsw>
                  MSW(Mock Service Worker)는 Mock서버를 구현하지않고도, 네트워크
                  수준에서 API를 Mocking 할 수 있습니다. 백엔드에서 API가
                  나오기전에 프론트에서 먼저 HTTP통신을 해 볼 수 있었습니다.
                </S.BobeMsw>
              </S.BobeMswTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                bobestyled={bobeStyled}
                onClick={() => {
                  setBobeStyled(!bobeStyled);
                }}
              >
                <S.SkillName>Styled Components</S.SkillName>
                <S.BobeStyledBtnDiv bobestyled={bobeStyled}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.BobeStyledBtnDiv>
              </S.SkillsTextAndBtn>
              <S.BobeStyledTextDiv bobestyled={bobeStyled}>
                <S.BobeStyled>
                  Styled Components는 자바스크립트 안에 CSS를 작성하는 CSS-in-JS
                  방식인 라이브러리입니다. React props를 활용한 조건부
                  스타일링이 가능하기도해서 좋았습니다.
                </S.BobeStyled>
              </S.BobeStyledTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                bobehook={bobeHook}
                onClick={() => {
                  setBobeHook(!bobeHook);
                }}
              >
                <S.SkillName>React Hook Form</S.SkillName>
                <S.BobeHookBtnDiv bobehook={bobeHook}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.BobeHookBtnDiv>
              </S.SkillsTextAndBtn>
              <S.BobeHookTextDiv bobehook={bobeHook}>
                <S.BobeHook>
                  React Hook Form은 회원가입, 로그인 페이지에서 입력창과
                  유효성검사를 더욱 효과적이고 간편하게 도와주는
                  라이브러리입니다. 데이터 전송관리하기에도 편해서 좋았습니다.
                </S.BobeHook>
              </S.BobeHookTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                bobeaxios={bobeAxios}
                onClick={() => {
                  setBobeAxios(!bobeAxios);
                }}
              >
                <S.SkillName>Axios</S.SkillName>
                <S.BobeAxiosBtnDiv bobeaxios={bobeAxios}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.BobeAxiosBtnDiv>
              </S.SkillsTextAndBtn>
              <S.BobeAxiosTextDiv bobeaxios={bobeAxios}>
                <S.BobeAxios>
                  Axios는 Node.js와 브라우저를 위한 Promise API를 활용하는 HTTP
                  통신 라이브러리 입니다. fetch를 사용하는 것 보다 코드를
                  간결하게 쓸 수 있어서 좋았습니다.
                </S.BobeAxios>
              </S.BobeAxiosTextDiv>
            </S.SkillsSection>
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
            <S.BobeLinkTextDiv>
              <RxCheck size='30' color='#3cb371' />
              <div>
                <span
                  onClick={() => {
                    window.open(bobeWorkBlogUrl);
                  }}
                >
                  <h6>보배빌림 작업내용정리 블로그 포스팅</h6>
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
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  Stack OverFlow 클론 코딩한 웹 서비스
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  프론트 3명 & 백엔드 2명 협업
                </h2>
                <h1>작업 내용</h1>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  메인페이지 - 카테고리 별 게시글 리스트들이 보이게 구현
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  작성페이지 - Toast Editor를 사용한 글 작성 기능 구현
                </h2>
                <h2>
                  <RxCheck size='30' color='#3cb371' />
                  검색창 - [단어] 옵션을 이용한 단어 관련 검색기능 구현
                </h2>
              </S.IntroDiv>
            </S.IntroDateDiv>
          </S.IntroAndWorkDetail>
          <S.SkillsTitleDiv>
            <GrTechnology size='25' />
            사용기술
          </S.SkillsTitleDiv>
          <S.SkillsContainer>
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                padakreact={padakReact}
                onClick={() => {
                  setPadakReact(!padakReact);
                }}
              >
                <S.SkillName>React</S.SkillName>
                <S.PadakReactBtnDiv padakreact={padakReact}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.PadakReactBtnDiv>
              </S.SkillsTextAndBtn>
              <S.PadakReactTextDiv padakreact={padakReact}>
                <S.PadakReact>
                  React는 Component를 이용하여 재사용이 가능하고, 유지보수의
                  용이함이있습니다. 많은 커뮤니티가 있어, 자료가 굉장히 방대하여
                  문제해결하기 좋습니다.
                </S.PadakReact>
              </S.PadakReactTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                padakredux={padakRedux}
                onClick={() => {
                  setPadakRedux(!padakRedux);
                }}
              >
                <S.SkillName>Redux</S.SkillName>
                <S.PadakReduxBtnDiv padakredux={padakRedux}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.PadakReduxBtnDiv>
              </S.SkillsTextAndBtn>
              <S.PadakReduxTextDiv padakredux={padakRedux}>
                <S.PadakRedux>
                  Redux는 전역에서 상태를 관리하게 해주는 라이브러리입니다.
                  Action - Dispatch - Reducer - Store 순서로 데이터를 단방향으로
                  전달하며 상태가 변경되면 React는 다시 렌더링을 시켜주는 다소
                  복잡한 방식이었습니다.
                </S.PadakRedux>
              </S.PadakReduxTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                padakstyled={padakStyled}
                onClick={() => {
                  setPadakStyled(!padakStyled);
                }}
              >
                <S.SkillName>Styled Components</S.SkillName>
                <S.PadakStyledBtnDiv padakstyled={padakStyled}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.PadakStyledBtnDiv>
              </S.SkillsTextAndBtn>
              <S.PadakStyledTextDiv padakstyled={padakStyled}>
                <S.PadakStyled>
                  Styled Components는 자바스크립트 안에 CSS를 작성하는 CSS-in-JS
                  방식인 라이브러리입니다. React props를 활용한 조건부
                  스타일링이 가능하기도해서 좋았습니다.
                </S.PadakStyled>
              </S.PadakStyledTextDiv>
            </S.SkillsSection>

            {/* {} */}
            <S.SkillsSection>
              <S.SkillsTextAndBtn
                padakaxios={padakAxios}
                onClick={() => {
                  setPadakAxios(!padakAxios);
                }}
              >
                <S.SkillName>Axios</S.SkillName>
                <S.PadakAxiosBtnDiv padakaxios={padakAxios}>
                  <MdOutlineKeyboardArrowDown size='25' color='#667085' />
                </S.PadakAxiosBtnDiv>
              </S.SkillsTextAndBtn>
              <S.PadakAxiosTextDiv padakaxios={padakAxios}>
                <S.PadakAxios>
                  Axios는 Node.js와 브라우저를 위한 Promise API를 활용하는 HTTP
                  통신 라이브러리 입니다. fetch를 사용하는 것 보다 코드를
                  간결하게 쓸 수 있어서 좋았습니다.
                </S.PadakAxios>
              </S.PadakAxiosTextDiv>
            </S.SkillsSection>
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

import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { GrTechnology } from 'react-icons/gr';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineSmartDisplay } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';

import { useState } from 'react';

import bobemain from '../../../assets/bobemain.mp4';
import bobesign from '../../../assets/bobesign.mp4';
import bobelogin from '../../../assets/bobelogin.mp4';
import bobemypage from '../../../assets/bobemypage.mp4';

import {
  bobeDeployUrl,
  bobeBlogUrl,
  bobeGitUrl,
  bobeNotionUrl,
  bobeInterViewUrl,
  bobeWorkBlogUrl,
} from 'constants/url';

import {
  MarginDiv,
  ProjectsTypeDiv,
  ProjectsNameDiv,
  WorkDate,
  IntroAndWorkDetail,
  IntroDateDiv,
  IntroDiv,
  VideoContainer,
  VideoTitleDiv,
  VideoTextAndBtn,
  VideoText,
  SkillsContainer,
  SkillsTitleDiv,
  SkillsSection,
  SkillsTextAndBtn,
  SkillName,
  LinkTitleDiv,
} from '../style';

const Bobe = () => {
  // 구현모습쪽 버튼 열고닫기 state
  const [bobeMain, setBobeMain] = useState(false);
  const [bobeSign, setBobeSign] = useState(false);
  const [bobeLogin, setBobeLogin] = useState(false);
  const [bobeMyPage, setBobeMyPage] = useState(false);

  // 스킬셋쪽 버튼 열고닫기 state

  const [bobeReact, setBobeReact] = useState(false);
  const [bobeVite, setBobeVite] = useState(false);
  const [bobeDaum, setBobeDaum] = useState(false);
  const [bobeRecoil, setBobeRecoil] = useState(false);
  const [bobeMsw, setBobeMsw] = useState(false);
  const [bobeStyled, setBobeStyled] = useState(false);
  const [bobeHook, setBobeHook] = useState(false);
  const [bobeAxios, setBobeAxios] = useState(false);

  return (
    <S.BoBeDiv id='pj_bobe'>
      <MarginDiv></MarginDiv>
      <ProjectsTypeDiv>팀 프로젝트</ProjectsTypeDiv>
      <ProjectsNameDiv>
        보배빌림 : 전기차 보조베터리 대여 서비스
      </ProjectsNameDiv>
      <IntroAndWorkDetail>
        <IntroDateDiv>
          <WorkDate>2022년 11월</WorkDate>
          <IntroDiv>
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
          </IntroDiv>
        </IntroDateDiv>
        <VideoTitleDiv>
          <MdOutlineSmartDisplay size='33' />
          구현모습
        </VideoTitleDiv>
        <VideoContainer>
          <VideoTextAndBtn
            bobemain={bobeMain}
            onClick={() => {
              setBobeMain(!bobeMain);
            }}
          >
            <VideoText>메인화면</VideoText>
            <S.VideoBobeMainBtnDiv bobemain={bobeMain}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.VideoBobeMainBtnDiv>
          </VideoTextAndBtn>
          <S.VideoBobeMainDiv bobemain={bobeMain}>
            <S.BobeMainVideo
              controls='controls'
              src={bobemain}
              alt='빔'
            ></S.BobeMainVideo>
          </S.VideoBobeMainDiv>

          <VideoTextAndBtn
            bobesign={bobeSign}
            onClick={() => {
              setBobeSign(!bobeSign);
            }}
          >
            <VideoText>회원가입화면</VideoText>
            <S.VideoBobeSignBtnDiv bobesign={bobeSign}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.VideoBobeSignBtnDiv>
          </VideoTextAndBtn>
          <S.VideoBobeSignDiv bobesign={bobeSign}>
            <S.BobeSignVideo
              controls='controls'
              src={bobesign}
              alt='빔'
            ></S.BobeSignVideo>
          </S.VideoBobeSignDiv>
          {/*  */}
          <VideoTextAndBtn
            bobelogin={bobeLogin}
            onClick={() => {
              setBobeLogin(!bobeLogin);
            }}
          >
            <VideoText>로그인화면</VideoText>
            <S.VideoBobeLoginBtnDiv bobelogin={bobeLogin}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.VideoBobeLoginBtnDiv>
          </VideoTextAndBtn>
          <S.VideoBobeLoginDiv bobelogin={bobeLogin}>
            <S.BobeLoginVideo
              controls='controls'
              src={bobelogin}
              alt='빔'
            ></S.BobeLoginVideo>
          </S.VideoBobeLoginDiv>
          {/*  */}
          <VideoTextAndBtn
            bobemypage={bobeMyPage}
            onClick={() => {
              setBobeMyPage(!bobeMyPage);
            }}
          >
            <VideoText>마이페이지화면</VideoText>
            <S.VideoBobeMyPageBtnDiv bobemypage={bobeMyPage}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.VideoBobeMyPageBtnDiv>
          </VideoTextAndBtn>
          <S.VideoBobeMyPageDiv bobemypage={bobeMyPage}>
            <S.BobeMyPageVideo
              controls='controls'
              src={bobemypage}
              alt='빔'
            ></S.BobeMyPageVideo>
          </S.VideoBobeMyPageDiv>
          {/* {} */}
        </VideoContainer>
      </IntroAndWorkDetail>
      <SkillsTitleDiv>
        <GrTechnology size='25' />
        사용기술
      </SkillsTitleDiv>
      <SkillsContainer>
        <SkillsSection>
          <SkillsTextAndBtn
            bobereact={bobeReact}
            onClick={() => {
              setBobeReact(!bobeReact);
            }}
          >
            <SkillName>React</SkillName>
            <S.BobeReactBtnDiv bobereact={bobeReact}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.BobeReactBtnDiv>
          </SkillsTextAndBtn>
          <S.BobeReactTextDiv bobereact={bobeReact}>
            <S.BobeReact>
              React는 Component를 이용하여 재사용이 가능하고, 유지보수 하기에도
              좋았습니다. 또한 자료가 굉장히 방대하여 문제해결에도 좋았습니다.
            </S.BobeReact>
          </S.BobeReactTextDiv>
        </SkillsSection>

        {/*  */}
        <SkillsSection>
          <SkillsTextAndBtn
            bobevite={bobeVite}
            onClick={() => {
              setBobeVite(!bobeVite);
            }}
          >
            <SkillName>Vite</SkillName>
            <S.BobeViteBtnDiv bobevite={bobeVite}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.BobeViteBtnDiv>
          </SkillsTextAndBtn>
          <S.BobeViteTextDiv bobevite={bobeVite}>
            <S.BobeVite>
              Vite는 프랑스어로 빠르다를 의미하는데 말그대로 굉장히 빠른 빌드
              속도를 보여줍니다. CRA는 Javascript로 구성된 Webpack으로
              빌드하는데 속도가 느립니다. CRA 웹팩빌드와 비교했을때 정말
              빨랐습니다.
            </S.BobeVite>
          </S.BobeViteTextDiv>
        </SkillsSection>

        {/* {} */}
        <SkillsSection>
          <SkillsTextAndBtn
            bobedaum={bobeDaum}
            onClick={() => {
              setBobeDaum(!bobeDaum);
            }}
          >
            <SkillName>Daum PostCode</SkillName>
            <S.BobeDaumBtnDiv bobedaum={bobeDaum}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.BobeDaumBtnDiv>
          </SkillsTextAndBtn>
          <S.BobeDaumTextDiv bobedaum={bobeDaum}>
            <S.BobeDaum>
              Daum PostCode는 주소 찾기를 도와주는 라이브러리입니다. npm으로
              react전용 Daum PostCode를 설치하여 사용할 수 있었습니다.
            </S.BobeDaum>
          </S.BobeDaumTextDiv>
        </SkillsSection>

        {/*  */}
        <SkillsSection>
          <SkillsTextAndBtn
            boberecoil={bobeRecoil}
            onClick={() => {
              setBobeRecoil(!bobeRecoil);
            }}
          >
            <SkillName>Recoil</SkillName>
            <S.BobeRecoilBtnDiv boberecoil={bobeRecoil}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.BobeRecoilBtnDiv>
          </SkillsTextAndBtn>
          <S.BobeRecoilTextDiv boberecoil={bobeRecoil}>
            <S.BobeRecoil>
              Recoil은 전역 상태를 관리하기 위해 사용하는 라이브러리입니다.
              Redux의 번거로운 초기세팅을 하지 않고 훨씬 쉽게 세팅하고 사용할 수
              있어서 사용하기 쉬운 전역상태관리 라이브러리였습니다.
            </S.BobeRecoil>
          </S.BobeRecoilTextDiv>
        </SkillsSection>

        {/* {} */}
        <SkillsSection>
          <SkillsTextAndBtn
            bobemsw={bobeMsw}
            onClick={() => {
              setBobeMsw(!bobeMsw);
            }}
          >
            <SkillName>MSW</SkillName>
            <S.BobeMswBtnDiv bobemsw={bobeMsw}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.BobeMswBtnDiv>
          </SkillsTextAndBtn>
          <S.BobeMswTextDiv bobemsw={bobeMsw}>
            <S.BobeMsw>
              MSW(Mock Service Worker)는 Mock서버를 구현하지않고도, 네트워크
              수준에서 API를 Mocking 할 수 있습니다. 백엔드에서 API가 나오기전에
              프론트에서 먼저 HTTP통신을 해 볼 수 있었습니다.
            </S.BobeMsw>
          </S.BobeMswTextDiv>
        </SkillsSection>

        {/* {} */}
        <SkillsSection>
          <SkillsTextAndBtn
            bobestyled={bobeStyled}
            onClick={() => {
              setBobeStyled(!bobeStyled);
            }}
          >
            <SkillName>Styled Components</SkillName>
            <S.BobeStyledBtnDiv bobestyled={bobeStyled}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.BobeStyledBtnDiv>
          </SkillsTextAndBtn>
          <S.BobeStyledTextDiv bobestyled={bobeStyled}>
            <S.BobeStyled>
              Styled Components는 자바스크립트 안에 CSS를 작성하는 CSS-in-JS
              방식인 라이브러리입니다. React props를 활용한 조건부 스타일링이
              가능하기도해서 좋았습니다.
            </S.BobeStyled>
          </S.BobeStyledTextDiv>
        </SkillsSection>

        {/* {} */}
        <SkillsSection>
          <SkillsTextAndBtn
            bobehook={bobeHook}
            onClick={() => {
              setBobeHook(!bobeHook);
            }}
          >
            <SkillName>React Hook Form</SkillName>
            <S.BobeHookBtnDiv bobehook={bobeHook}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.BobeHookBtnDiv>
          </SkillsTextAndBtn>
          <S.BobeHookTextDiv bobehook={bobeHook}>
            <S.BobeHook>
              React Hook Form은 회원가입, 로그인 페이지에서 입력창과
              유효성검사를 더욱 효과적이고 간편하게 도와주는 라이브러리입니다.
              데이터 전송관리하기에도 편해서 좋았습니다.
            </S.BobeHook>
          </S.BobeHookTextDiv>
        </SkillsSection>

        {/* {} */}
        <SkillsSection>
          <SkillsTextAndBtn
            bobeaxios={bobeAxios}
            onClick={() => {
              setBobeAxios(!bobeAxios);
            }}
          >
            <SkillName>Axios</SkillName>
            <S.BobeAxiosBtnDiv bobeaxios={bobeAxios}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.BobeAxiosBtnDiv>
          </SkillsTextAndBtn>
          <S.BobeAxiosTextDiv bobeaxios={bobeAxios}>
            <S.BobeAxios>
              Axios는 Node.js와 브라우저를 위한 Promise API를 활용하는 HTTP 통신
              라이브러리 입니다. fetch를 사용하는 것 보다 코드를 간결하게 쓸 수
              있어서 좋았습니다.
            </S.BobeAxios>
          </S.BobeAxiosTextDiv>
        </SkillsSection>
      </SkillsContainer>
      <LinkTitleDiv>
        <AiOutlineLink size='30' />
        관련링크
      </LinkTitleDiv>
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
  );
};

export default Bobe;

import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineSmartDisplay } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';

import uyoumain from '../../../assets/uyoumain.mp4';
import uyousign from '../../../assets/uyousign.mp4';
import uyoulogin from '../../../assets/uyoulogin.mp4';
import uyoumypage from '../../../assets/uyoumypage.mp4';

import {
  uyouBlogUrl,
  uyouGitUrl,
  uyouWorkBlogUrl,
  uyouDeployUrl,
  uyouNaverBlogUrl,
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
  SkillsContainer,
  SkillsTitleDiv,
  LinkTitleDiv,
} from '../style';
import VideoBox from 'components/@commons/VideoBox';
import { uyouWork } from 'data/uyouWork';
import { uyouIntro } from 'data/uyouIntro';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../../../recoil/darkmode';
import SkillsBox from 'components/@commons/SkillsBox';

const UyouBooDan = () => {
  const isDark = useRecoilValue(darkmode);

  return (
    <S.UyouBooDanDiv id='pj_uyou'>
      <MarginDiv></MarginDiv>
      <ProjectsTypeDiv>팀 프로젝트</ProjectsTypeDiv>
      <ProjectsNameDiv>우유부단 : 공개 투표 서비스</ProjectsNameDiv>
      <IntroAndWorkDetail>
        <IntroDateDiv>
          <WorkDate isdark={isDark}>2023년 1월 - 진행중</WorkDate>
          <IntroDiv>
            <h1>서비스 소개</h1>
            {uyouIntro &&
              uyouIntro.map((el) => {
                return (
                  <h2 key={el.id}>
                    <RxCheck
                      size='30'
                      color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
                    />
                    {el.text}
                  </h2>
                );
              })}
            {/* {} */}
            <h1>작업 내용</h1>
            {uyouWork &&
              uyouWork.map((el) => {
                return (
                  <h2 key={el.id}>
                    <RxCheck
                      size='30'
                      color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
                    />
                    {el.text}
                  </h2>
                );
              })}
          </IntroDiv>
        </IntroDateDiv>
        <VideoTitleDiv>
          <MdOutlineSmartDisplay size='33' />
          구현모습
        </VideoTitleDiv>
        <VideoContainer>
          <VideoBox title={'메인화면'} video={uyoumain} />
          <VideoBox title={'회원가입화면'} video={uyousign} />
          <VideoBox title={'로그인화면'} video={uyoulogin} />
          <VideoBox title={'마이페이지화면'} video={uyoumypage} />
        </VideoContainer>
      </IntroAndWorkDetail>
      {/*  */}
      <SkillsTitleDiv>
        <BiSearchAlt size='25' />
        사용기술
      </SkillsTitleDiv>
      <SkillsContainer>
        <SkillsBox
          title={'React'}
          detail={
            'React는 Component를 이용하여 재사용이 가능하고, 유지보수 하기에도 좋았습니다. 또한 자료가 굉장히 방대하여 문제해결에도 좋았습니다.'
          }
        />
        <SkillsBox
          title={'TypeScript'}
          detail={
            'TypeScript는 코드에 타입을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거 할 수 있었습니다.'
          }
        />
        <SkillsBox
          title={'NextJS'}
          detail={
            'Next.JS는 React의 SSR(Server Side Rendering)을 제공해주는 프레임워크입니다. 직관적인 페이지 기반 라우팅 시스템이있어서 /pages 폴더에서 컴포넌트를 export하면 페이지 Route가 돼서 라우팅에 편리했습니다. 서버에서 렌더링이 일어나기 때문에 클라이언트에서 브라우저 전용 객체(localStorage 등)를 사용하면 서버에서 읽질 못하기 때문에 방법을 찾아 해결 하였습니다.'
          }
        />
        <SkillsBox
          title={'Redux Toolkit'}
          detail={
            'Redux Toolkit은 react의 전역상태관리 라이브러리입니다. Redux Toolkit은 Redux의 단점들을 보완해주며 특히 Redux 스토어의 복잡한 환경설정 세팅을 간단하게 쓸 수 있어서 좋았습니다.'
          }
        />
        <SkillsBox
          title={'MSW'}
          detail={
            'MSW(Mock Service Worker)는 Mock서버를 구현하지않고도, 네트워크 수준에서 API를 Mocking 할 수 있습니다. 백엔드에서 API가 나오기전에 프론트에서 먼저 HTTP통신을 해 볼 수 있었습니다.'
          }
        />
        <SkillsBox
          title={'Styled Components'}
          detail={
            'Styled Components는 자바스크립트 안에 CSS를 작성하는 CSS-in-JS 방식인 라이브러리입니다. React props를 활용한 조건부 스타일링이 가능하기도해서 좋았습니다.'
          }
        />
        <SkillsBox
          title={'React Hook Form'}
          detail={
            'React Hook Form은 회원가입, 로그인 페이지에서 입력창과 유효성검사를 더욱 효과적이고 간편하게 도와주는 라이브러리입니다. 데이터 전송관리하기에도 편해서 좋았습니다.'
          }
        />
        <SkillsBox
          title={'Axios'}
          detail={
            'Axios는 Node.js와 브라우저를 위한 Promise API를 활용하는 HTTP 통신 라이브러리 입니다. fetch를 사용하는 것 보다 코드를 간결하게 쓸 수 있어서 좋았습니다.'
          }
        />
      </SkillsContainer>
      {/* {} */}
      <LinkTitleDiv>
        <AiOutlineLink size='30' />
        관련링크
      </LinkTitleDiv>
      <S.UyouLinkContainer>
        <S.UyouLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
        <S.UyouLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
        <S.UyouLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
        <S.UyouLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
        <S.UyouLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
  );
};

export default UyouBooDan;

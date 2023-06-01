import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineSmartDisplay } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
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
  SkillsContainer,
  SkillsTitleDiv,
  LinkTitleDiv,
} from '../style';
import VideoBox from 'components/@commons/VideoBox';
import { bobeIntro } from 'data/bobeIntro';
import { bobeWork } from 'data/bobeWork';
import { useRecoilValue } from 'recoil';
import { darkmode } from 'recoil/darkmode';
import SkillsBox from 'components/@commons/SkillsBox';

const Bobe = () => {
  const isDark = useRecoilValue(darkmode);

  return (
    <S.BoBeDiv id='pj_bobe'>
      <MarginDiv></MarginDiv>
      <ProjectsTypeDiv>팀 프로젝트</ProjectsTypeDiv>
      <ProjectsNameDiv>
        보배빌림 : 전기차 보조베터리 대여 서비스
      </ProjectsNameDiv>
      <IntroAndWorkDetail>
        <IntroDateDiv>
          <WorkDate isdark={isDark}>2022년 11월</WorkDate>
          <IntroDiv>
            <h1>서비스 소개</h1>
            {bobeIntro &&
              bobeIntro.map((el) => {
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
            {bobeWork &&
              bobeWork.map((el) => {
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
          <VideoBox title={'메인화면'} video={bobemain} />
          <VideoBox title={'회원가입화면'} video={bobesign} />
          <VideoBox title={'로그인화면'} video={bobelogin} />
          <VideoBox title={'마이페이지화면'} video={bobemypage} />
        </VideoContainer>
      </IntroAndWorkDetail>
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
          title={'Vite'}
          detail={
            'Vite는 프랑스어로 빠르다를 의미하는데 말그대로 굉장히 빠른 빌드 속도를 보여줍니다. CRA는 Javascript로 구성된 Webpack으로 빌드하는데 속도가 느립니다. CRA 웹팩빌드와 비교했을때 정말 빨랐습니다.'
          }
        />
        <SkillsBox
          title={'Recoil'}
          detail={
            'Recoil은 전역 상태를 관리하기 위해 사용하는 라이브러리입니다. Redux의 번거로운 초기세팅을 하지 않고 훨씬 쉽게 세팅하고 사용할 수 있어서 사용하기 쉬운 전역상태관리 라이브러리였습니다. recoil폴더 생성후 파일에 atom을 import한 뒤, 키와 초기값을 설정해주고 상태를 사용할 파일에서 useRecoilState와 같은 매서드를 import만 하면 useState처럼 사용할 수 있어서 편리했습니다.'
          }
        />
        <SkillsBox
          title={'Daum PostCode'}
          detail={
            'Daum PostCode는 주소 찾기를 도와주는 라이브러리입니다. npm으로 react전용 Daum PostCode를 설치하여 사용할 수 있었습니다.'
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
      <LinkTitleDiv>
        <AiOutlineLink size='30' />
        관련링크
      </LinkTitleDiv>
      <S.BobeLinkContainer>
        <S.BobeLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
        <S.BobeLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
        <S.BobeLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
        <S.BobeLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
        <S.BobeLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
        <S.BobeLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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

import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';
import { portGitUrl, portBlogUrl } from 'constants/url';
import {
  MarginDiv,
  ProjectsTypeDiv,
  ProjectsNameDiv,
  IntroAndWorkDetail,
  IntroDateDiv,
  IntroDiv,
  SkillsContainer,
  SkillsTitleDiv,
  LinkTitleDiv,
} from '../style';
import { portWork } from 'data/portwork';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../../../recoil/darkmode';
import SkillsBox from 'components/@commons/SkillsBox';

const PortFolio = () => {
  const isDark = useRecoilValue(darkmode);

  return (
    <S.PortFolioDiv id='pj_portfolio'>
      <MarginDiv></MarginDiv>
      <ProjectsTypeDiv>개인 프로젝트</ProjectsTypeDiv>
      <ProjectsNameDiv>김효중 포트폴리오</ProjectsNameDiv>
      <IntroAndWorkDetail>
        <IntroDateDiv>
          <IntroDiv>
            <h1>서비스 소개</h1>
            <h2>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              김효중의 개인 포트폴리오
            </h2>
            <h1>작업 내용</h1>
            {portWork &&
              portWork.map((el) => {
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
      </IntroAndWorkDetail>
      {/* {} */}
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
          title={'React Router Dom'}
          detail={
            'React Router Dom은 SPA(Single Page Application) 즉, 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현하게 해주는 라이브러리입니다. 이번 프로젝트에선 한 화면에서 모든 페이지를 스크롤하게 만들었기때문에 라우팅을 사용한게 첫화면에서 한번 뿐 이지만 SPA를 구현하기에 좋은 라이브러리입니다.'
          }
        />
        <SkillsBox
          title={'React Scroll'}
          detail={
            'React Scroll은 링크를 걸어두어 태그의 id값을 확인해 스크롤 이동시켜주게 도와주는 라이브러리입니다. 라이브러리 설치후 Router Link말고 scroll Link를 import해서 사용하는 방식이었습니다. Link에 경로 지정해두고 위치할 태그에 id값을 넣어주면 돼서 사용하기 편했습니다.'
          }
        />
        <SkillsBox
          title={'Styled Components'}
          detail={
            'Styled Components는 자바스크립트 안에 CSS를 작성하는 Css-In-Js 방식인 라이브러리입니다. React props를 활용한 조건부 스타일링이 가능하기도해서 좋았습니다.'
          }
        />
        <SkillsBox
          title={'Recoil'}
          detail={
            'Recoil은 전역 상태를 관리하기 위해 사용하는 라이브러리입니다. Redux의 번거로운 초기세팅을 하지 않고 훨씬 쉽게 세팅하고 사용할 수 있어서 사용하기 쉬운 전역상태관리 라이브러리였습니다. recoil폴더 생성후 파일에 atom을 import한 뒤, 키와 초기값을 설정해주고 상태를 사용할 파일에서 useRecoilState와 같은 매서드를 import만 하면 useState처럼 사용할 수 있어서 편리했습니다.'
          }
        />
      </SkillsContainer>
      {/* {} */}
      <LinkTitleDiv>
        <AiOutlineLink size='30' />
        관련링크
      </LinkTitleDiv>
      <S.PortLinkContainer>
        <S.PortLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
        <S.PortLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
  );
};

export default PortFolio;

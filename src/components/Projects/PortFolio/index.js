import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { GrTechnology } from 'react-icons/gr';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import { portGitUrl, portBlogUrl } from 'constants/url';
import { useState } from 'react';
import {
  MarginDiv,
  ProjectsTypeDiv,
  ProjectsNameDiv,
  IntroAndWorkDetail,
  IntroDateDiv,
  IntroDiv,
  SkillsContainer,
  SkillsTitleDiv,
  SkillsSection,
  SkillsTextAndBtn,
  SkillName,
  LinkTitleDiv,
} from '../style';
import { portWork } from 'data/portwork';
import { useRecoilState } from 'recoil';
import { darkmode } from '../../../recoil/darkmode';

const PortFolio = () => {
  const [isDark, setIsDark] = useRecoilState(darkmode);

  const [portReact, setPortReact] = useState(false);
  const [portRouter, setPortRouter] = useState(false);
  const [portScrol, setPortScrol] = useState(false);
  const [portStyled, setPortStyled] = useState(false);
  const [portRecoil, setPortRecoil] = useState(false);

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
              <RxCheck size='30' color='#3cb371' />
              김효중의 개인 포트폴리오
            </h2>
            <h1>작업 내용</h1>
            {portWork &&
              portWork.map((el) => {
                return (
                  <h2 key={el.id}>
                    <RxCheck size='30' color='#3cb371' />
                    {el.text}
                  </h2>
                );
              })}
          </IntroDiv>
        </IntroDateDiv>
      </IntroAndWorkDetail>
      {/* {} */}
      <SkillsTitleDiv>
        {/* <GrTechnology size='25' /> */}
        <BiSearchAlt size='25' />
        사용기술
      </SkillsTitleDiv>
      <SkillsContainer>
        <SkillsSection>
          <SkillsTextAndBtn
            portreact={portReact}
            isdark={isDark}
            onClick={() => {
              setPortReact(!portReact);
            }}
          >
            <SkillName isdark={isDark}>React</SkillName>
            <S.PortReactBtnDiv portreact={portReact}>
              <MdOutlineKeyboardArrowDown
                size='25'
                color={isDark ? 'white' : '#667085'}
              />
            </S.PortReactBtnDiv>
          </SkillsTextAndBtn>
          <S.PortReactTextDiv portreact={portReact} isdark={isDark}>
            <S.PortReact isdark={isDark}>
              React는 Component를 이용하여 재사용이 가능하고, 유지보수 하기에도
              좋았습니다. 또한 자료가 굉장히 방대하여 문제해결에도 좋았습니다.
            </S.PortReact>
          </S.PortReactTextDiv>
        </SkillsSection>

        {/* {} */}
        <SkillsSection>
          <SkillsTextAndBtn
            portrouter={portRouter}
            isdark={isDark}
            onClick={() => {
              setPortRouter(!portRouter);
            }}
          >
            <SkillName isdark={isDark}>React Router Dom</SkillName>
            <S.PortRouterBtnDiv portrouter={portRouter}>
              <MdOutlineKeyboardArrowDown
                size='25'
                color={isDark ? 'white' : '#667085'}
              />
            </S.PortRouterBtnDiv>
          </SkillsTextAndBtn>
          <S.PortRouterTextDiv portrouter={portRouter} isdark={isDark}>
            <S.PortRouter isdark={isDark}>
              React Router Dom은 SPA(Single Page Application) 즉, 전체 페이지를
              하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현하게 해주는
              라이브러리입니다. 이번 프로젝트에선 한 화면에서 모든 페이지를
              스크롤하게 만들었기때문에 라우팅을 사용한게 첫화면에서 한번 뿐
              이지만 SPA를 구현하기에 좋은 라이브러리입니다.
            </S.PortRouter>
          </S.PortRouterTextDiv>
        </SkillsSection>

        {/* {} */}
        <SkillsSection>
          <SkillsTextAndBtn
            portscrol={portScrol}
            isdark={isDark}
            onClick={() => {
              setPortScrol(!portScrol);
            }}
          >
            <SkillName isdark={isDark}>React Scroll</SkillName>
            <S.PortScrolBtnDiv portscrol={portScrol}>
              <MdOutlineKeyboardArrowDown
                size='25'
                color={isDark ? 'white' : '#667085'}
              />
            </S.PortScrolBtnDiv>
          </SkillsTextAndBtn>
          <S.PortScrolTextDiv portscrol={portScrol} isdark={isDark}>
            <S.PortScrol isdark={isDark}>
              React Scroll은 링크를 걸어두어 태그의 id값을 확인해 스크롤
              이동시켜주게 도와주는 라이브러리입니다. 라이브러리 설치후 Router
              Link말고 scroll Link를 import해서 사용하는 방식이었습니다. Link에
              경로 지정해두고 위치할 태그에 id값을 넣어주면 돼서 사용하기
              편했습니다.
            </S.PortScrol>
          </S.PortScrolTextDiv>
        </SkillsSection>

        {/* {} */}
        <SkillsSection>
          <SkillsTextAndBtn
            portstyled={portStyled}
            isdark={isDark}
            onClick={() => {
              setPortStyled(!portStyled);
            }}
          >
            <SkillName isdark={isDark}>Styled Components</SkillName>
            <S.PortStyledBtnDiv portstyled={portStyled}>
              <MdOutlineKeyboardArrowDown
                size='25'
                color={isDark ? 'white' : '#667085'}
              />
            </S.PortStyledBtnDiv>
          </SkillsTextAndBtn>
          <S.PortStyledTextDiv portstyled={portStyled} isdark={isDark}>
            <S.PortStyled isdark={isDark}>
              Styled Components는 자바스크립트 안에 CSS를 작성하는 CSS-in-JS
              방식인 라이브러리입니다. React props를 활용한 조건부 스타일링이
              가능하기도해서 좋았습니다.
            </S.PortStyled>
          </S.PortStyledTextDiv>
        </SkillsSection>
        {/* {} */}
        <SkillsSection>
          <SkillsTextAndBtn
            portrecoil={portRecoil}
            isdark={isDark}
            onClick={() => {
              setPortRecoil(!portRecoil);
            }}
          >
            <SkillName isdark={isDark}>Recoil</SkillName>
            <S.PortRecoilBtnDiv portrecoil={portRecoil}>
              <MdOutlineKeyboardArrowDown
                size='25'
                color={isDark ? 'white' : '#667085'}
              />
            </S.PortRecoilBtnDiv>
          </SkillsTextAndBtn>
          <S.PortRecoilTextDiv portrecoil={portRecoil} isdark={isDark}>
            <S.PortRecoil isdark={isDark}>
              Recoil은 전역 상태를 관리하기 위해 사용하는 라이브러리입니다.
              Redux의 번거로운 초기세팅을 하지 않고 훨씬 쉽게 세팅하고 사용할 수
              있어서 사용하기 쉬운 전역상태관리 라이브러리였습니다. recoil폴더
              생성후 파일에 atom을 import한 뒤, 키와 초기값을 설정해주고 상태를
              사용할 파일에서 useRecoilState와 같은 매서드를 import만 하면
              useState처럼 사용할 수 있어서 편리했습니다.
            </S.PortRecoil>
          </S.PortRecoilTextDiv>
        </SkillsSection>
      </SkillsContainer>
      {/* {} */}
      <LinkTitleDiv>
        <AiOutlineLink size='30' />
        관련링크
      </LinkTitleDiv>
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
  );
};

export default PortFolio;

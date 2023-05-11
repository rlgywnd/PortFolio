import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { GrTechnology } from 'react-icons/gr';
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

const PortFolio = () => {
  const [portReact, setPortReact] = useState(false);
  const [portRouter, setPortRouter] = useState(false);
  const [portScrol, setPortScrol] = useState(false);
  const [portStyled, setPortStyled] = useState(false);

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
          </IntroDiv>
        </IntroDateDiv>
      </IntroAndWorkDetail>
      {/* {} */}
      <SkillsTitleDiv>
        <GrTechnology size='25' />
        사용기술
      </SkillsTitleDiv>
      <SkillsContainer>
        <SkillsSection>
          <SkillsTextAndBtn
            portreact={portReact}
            onClick={() => {
              setPortReact(!portReact);
            }}
          >
            <SkillName>React</SkillName>
            <S.PortReactBtnDiv portreact={portReact}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.PortReactBtnDiv>
          </SkillsTextAndBtn>
          <S.PortReactTextDiv portreact={portReact}>
            <S.PortReact>
              React는 Component를 이용하여 재사용이 가능하고, 유지보수 하기에도
              좋았습니다. 또한 자료가 굉장히 방대하여 문제해결에도 좋았습니다.
            </S.PortReact>
          </S.PortReactTextDiv>
        </SkillsSection>

        {/* {} */}
        <SkillsSection>
          <SkillsTextAndBtn
            portrouter={portRouter}
            onClick={() => {
              setPortRouter(!portRouter);
            }}
          >
            <SkillName>React Router Dom</SkillName>
            <S.PortRouterBtnDiv portrouter={portRouter}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.PortRouterBtnDiv>
          </SkillsTextAndBtn>
          <S.PortRouterTextDiv portrouter={portRouter}>
            <S.PortRouter>
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
            onClick={() => {
              setPortScrol(!portScrol);
            }}
          >
            <SkillName>React Scroll</SkillName>
            <S.PortScrolBtnDiv portscrol={portScrol}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.PortScrolBtnDiv>
          </SkillsTextAndBtn>
          <S.PortScrolTextDiv portscrol={portScrol}>
            <S.PortScrol>
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
            onClick={() => {
              setPortStyled(!portStyled);
            }}
          >
            <SkillName>Styled Components</SkillName>
            <S.PortStyledBtnDiv portstyled={portStyled}>
              <MdOutlineKeyboardArrowDown size='25' color='#667085' />
            </S.PortStyledBtnDiv>
          </SkillsTextAndBtn>
          <S.PortStyledTextDiv portstyled={portStyled}>
            <S.PortStyled>
              Styled Components는 자바스크립트 안에 CSS를 작성하는 CSS-in-JS
              방식인 라이브러리입니다. React props를 활용한 조건부 스타일링이
              가능하기도해서 좋았습니다.
            </S.PortStyled>
          </S.PortStyledTextDiv>
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

import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';

import { useState } from 'react';

import { padakDemoUrl, padakGitUrl, padakDeployUrl } from 'constants/url';

import {
  MarginDiv,
  ProjectsTypeDiv,
  ProjectsNameDiv,
  IntroAndWorkDetail,
  IntroDateDiv,
  WorkDate,
  IntroDiv,
  SkillsContainer,
  SkillsTitleDiv,
  SkillsSection,
  SkillsTextAndBtn,
  SkillName,
  LinkTitleDiv,
} from '../style';

import { padakIntro } from 'data/padakIntro';
import { padakWork } from 'data/padakWork';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../../../recoil/darkmode';

const Padak = () => {
  const isDark = useRecoilValue(darkmode);
  // 스킬셋쪽 버튼 열고닫기 state
  const [padakReact, setPadakReact] = useState(false);
  const [padakRedux, setPadakRedux] = useState(false);
  const [padakStyled, setPadakStyled] = useState(false);
  const [padakAxios, setPadakAxios] = useState(false);

  return (
    <S.StackOverDiv id='pj_stack'>
      <MarginDiv></MarginDiv>
      <ProjectsTypeDiv>팀 프로젝트</ProjectsTypeDiv>
      <ProjectsNameDiv>Stack OverFlow 클론</ProjectsNameDiv>
      <IntroAndWorkDetail>
        <IntroDateDiv>
          <WorkDate isdark={isDark}>2022년 10월</WorkDate>
          <IntroDiv>
            <h1>서비스 소개</h1>
            {padakIntro &&
              padakIntro.map((el) => {
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
            {padakWork &&
              padakWork.map((el) => {
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
      <SkillsTitleDiv>
        <BiSearchAlt size='25' />
        사용기술
      </SkillsTitleDiv>
      <SkillsContainer>
        <SkillsSection>
          <SkillsTextAndBtn
            padakreact={padakReact}
            isdark={isDark}
            onClick={() => {
              setPadakReact(!padakReact);
            }}
          >
            <SkillName isdark={isDark}>React</SkillName>
            <S.PadakReactBtnDiv padakreact={padakReact}>
              <MdOutlineKeyboardArrowDown
                size='25'
                color={isDark ? 'white' : '#667085'}
              />
            </S.PadakReactBtnDiv>
          </SkillsTextAndBtn>
          <S.PadakReactTextDiv padakreact={padakReact} isdark={isDark}>
            <S.PadakReact isdark={isDark}>
              React는 Component를 이용하여 재사용이 가능하고, 유지보수의
              용이함이있습니다. 많은 커뮤니티가 있어, 자료가 굉장히 방대하여
              문제해결하기 좋습니다.
            </S.PadakReact>
          </S.PadakReactTextDiv>
        </SkillsSection>

        {/* {} */}
        <SkillsSection>
          <SkillsTextAndBtn
            padakredux={padakRedux}
            isdark={isDark}
            onClick={() => {
              setPadakRedux(!padakRedux);
            }}
          >
            <SkillName isdark={isDark}>Redux</SkillName>
            <S.PadakReduxBtnDiv padakredux={padakRedux}>
              <MdOutlineKeyboardArrowDown
                size='25'
                color={isDark ? 'white' : '#667085'}
              />
            </S.PadakReduxBtnDiv>
          </SkillsTextAndBtn>
          <S.PadakReduxTextDiv padakredux={padakRedux} isdark={isDark}>
            <S.PadakRedux isdark={isDark}>
              Redux는 전역에서 상태를 관리하게 해주는 라이브러리입니다. Action -
              Dispatch - Reducer - Store 순서로 데이터를 단방향으로 전달하며
              상태가 변경되면 React는 다시 렌더링을 시켜주는 다소 복잡한
              방식이었습니다.
            </S.PadakRedux>
          </S.PadakReduxTextDiv>
        </SkillsSection>

        {/* {} */}
        <SkillsSection>
          <SkillsTextAndBtn
            padakstyled={padakStyled}
            isdark={isDark}
            onClick={() => {
              setPadakStyled(!padakStyled);
            }}
          >
            <SkillName isdark={isDark}>Styled Components</SkillName>
            <S.PadakStyledBtnDiv padakstyled={padakStyled}>
              <MdOutlineKeyboardArrowDown
                size='25'
                color={isDark ? 'white' : '#667085'}
              />
            </S.PadakStyledBtnDiv>
          </SkillsTextAndBtn>
          <S.PadakStyledTextDiv padakstyled={padakStyled} isdark={isDark}>
            <S.PadakStyled isdark={isDark}>
              Styled Components는 자바스크립트 안에 CSS를 작성하는 CSS-in-JS
              방식인 라이브러리입니다. React props를 활용한 조건부 스타일링이
              가능하기도해서 좋았습니다.
            </S.PadakStyled>
          </S.PadakStyledTextDiv>
        </SkillsSection>

        {/* {} */}
        <SkillsSection>
          <SkillsTextAndBtn
            padakaxios={padakAxios}
            isdark={isDark}
            onClick={() => {
              setPadakAxios(!padakAxios);
            }}
          >
            <SkillName isdark={isDark}>Axios</SkillName>
            <S.PadakAxiosBtnDiv padakaxios={padakAxios}>
              <MdOutlineKeyboardArrowDown
                size='25'
                color={isDark ? 'white' : '#667085'}
              />
            </S.PadakAxiosBtnDiv>
          </SkillsTextAndBtn>
          <S.PadakAxiosTextDiv padakaxios={padakAxios} isdark={isDark}>
            <S.PadakAxios isdark={isDark}>
              Axios는 Node.js와 브라우저를 위한 Promise API를 활용하는 HTTP 통신
              라이브러리 입니다. fetch를 사용하는 것 보다 코드를 간결하게 쓸 수
              있어서 좋았습니다.
            </S.PadakAxios>
          </S.PadakAxiosTextDiv>
        </SkillsSection>
      </SkillsContainer>
      <LinkTitleDiv>
        <AiOutlineLink size='30' />
        관련링크
      </LinkTitleDiv>
      <S.PadakLinkContainer>
        <S.PadakLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
        <S.PadakLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
        <S.PadakLinkTextDiv isdark={isDark}>
          <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
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
  );
};

export default Padak;

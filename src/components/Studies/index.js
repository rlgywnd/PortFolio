import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../../recoil/darkmode';
import { soloStudyBlogUrl } from 'constants/url';

const Studies = () => {
  const isDark = useRecoilValue(darkmode);

  return (
    <S.StudiesContainer id='studies'>
      <S.TitleUnderlineDiv isdark={isDark}>
        <S.StudiesTitleH1>STUDIES.</S.StudiesTitleH1>
      </S.TitleUnderlineDiv>
      <S.StudiesDiv>
        <S.SelfStudyDiv id='self_study'>
          <S.MarginDiv></S.MarginDiv>
          <S.CareerDate isdark={isDark}>2021.09 - 2022.02</S.CareerDate>
          <S.IntroDiv isdark={isDark}>
            <h1>프론트엔드 프로그래밍 독학</h1>
            <h3>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              <span
                onClick={() => {
                  window.open(soloStudyBlogUrl);
                }}
              >
                <h2>윤인성 혼공자 강의 학습하며 블로그 포스팅</h2>
              </span>
            </h3>
            <h3>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              Javascript언어 기초지식 학습
            </h3>
            <h3>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              HTML / CSS 기초지식 학습
            </h3>
            <h3>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              React 라이브러리 학습
            </h3>
            <h3>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              블로그 포스팅
            </h3>
          </S.IntroDiv>
        </S.SelfStudyDiv>
        <S.PoliceDiv id='police'>
          <S.MarginDiv></S.MarginDiv>
          <S.CareerDate isdark={isDark}>2020.05 - 2021.05</S.CareerDate>
          <S.IntroDiv>
            <h1>검찰공무원 9급 준비</h1>
            <h3>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              법검단기 프리패스 과정 9급 검찰직 수강
            </h3>
          </S.IntroDiv>
        </S.PoliceDiv>
      </S.StudiesDiv>
    </S.StudiesContainer>
  );
};

export default Studies;

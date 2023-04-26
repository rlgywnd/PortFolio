import * as S from './style';
import { RxCheck } from 'react-icons/rx';

const Studies = () => {
  return (
    <S.StudiesContainer id='studies'>
      <S.TitleUnderlineDiv>
        <S.StudiesTitleH1>STUDIES.</S.StudiesTitleH1>
      </S.TitleUnderlineDiv>
      <S.StudiesDiv>
        <S.SelfStudyDiv id='self_study'>
          <S.MarginDiv></S.MarginDiv>
          <S.CareerDate>2021.09 - 2022.02</S.CareerDate>
          <S.IntroDiv>
            <h1>프론트엔드 프로그래밍 독학</h1>
            <div>
              <RxCheck size='30' color='#3cb371' />
              Javascript언어 기초지식 학습
            </div>
            <div>
              <RxCheck size='30' color='#3cb371' />
              HTML / CSS 기초지식 학습
            </div>
            <div>
              <RxCheck size='30' color='#3cb371' />
              React 라이브러리 학습
            </div>
            <div>
              <RxCheck size='30' color='#3cb371' />
              블로그 포스팅
            </div>
          </S.IntroDiv>
        </S.SelfStudyDiv>
        <S.PoliceDiv id='police'>
          <S.MarginDiv></S.MarginDiv>
          <S.CareerDate>2020.05 - 2021.05</S.CareerDate>
          <S.IntroDiv>
            <h1>검찰공무원 9급 준비</h1>
            <div>
              <RxCheck size='30' color='#3cb371' />
              인강 법검단기 9급 검찰직 수강
            </div>
          </S.IntroDiv>
        </S.PoliceDiv>
      </S.StudiesDiv>
    </S.StudiesContainer>
  );
};

export default Studies;

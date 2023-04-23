import * as S from './style';
import { RxCheck } from 'react-icons/rx';

const Education = () => {
  return (
    <S.EduContainer id='education'>
      <S.TitleUnderlineDiv>
        <S.EduTitleH1>EDUCATION.</S.EduTitleH1>
      </S.TitleUnderlineDiv>
      <S.EduDiv>
        <S.CodeStatesDiv id='codestates'>
          <S.MarginDiv></S.MarginDiv>
          <S.EduDate>2022.06 - 2022.12</S.EduDate>
          <S.IntroDiv>
            <h1>코드스테이츠(Code States)</h1>
            <div>
              <RxCheck size='30' color='#3cb371' />
              software engineering bootcamp, Front-end(40기)
            </div>
            <div>
              <RxCheck size='30' color='#3cb371' />
              Javascript언어 기반으로 프론트엔드 과정 학습
            </div>
            <div>
              <RxCheck size='30' color='#3cb371' />
              React 중심 WEB 구현
            </div>
            <div>
              <RxCheck size='30' color='#3cb371' />
              페어 프로그래밍 협업 & 코드 리뷰 경험
            </div>
            <div>
              <RxCheck size='30' color='#3cb371' />
              알고리즘 문제 풀이
            </div>
          </S.IntroDiv>
        </S.CodeStatesDiv>
        <S.SchoolDiv id='school'>
          <S.EduDate>2012.03 - 자퇴</S.EduDate>
          <S.IntroDiv>
            <h1>광운대학교</h1>
            <div>
              <RxCheck size='30' color='#3cb371' />
              광운대학교[컴퓨터공학과]에 입학 & 다른 목표로 인해 바로 자퇴.
            </div>
          </S.IntroDiv>
        </S.SchoolDiv>
      </S.EduDiv>
    </S.EduContainer>
  );
};

export default Education;

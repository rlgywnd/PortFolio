import * as S from './style';
import { RxCheck } from 'react-icons/rx';

const Career = () => {
  return (
    <S.CareerContainer id='career'>
      <S.TitleUnderlineDiv>
        <S.CareerTitleH1>CAREER.</S.CareerTitleH1>
      </S.TitleUnderlineDiv>
      <S.CareerDiv>
        {/* <S.NaratorDiv id='narator'>
          <S.MarginDiv></S.MarginDiv>
          <S.CareerDate>2016.01 - 2017.05</S.CareerDate>
          <S.IntroDiv>
            <h1>나레이터모델</h1>
            <div>
              <RxCheck size='30' color='#3cb371' />
              행사 관련 나레이터모델 근무 경험
            </div>
            <div>
              <RxCheck size='30' color='#3cb371' />
              Galaxy S8 행사 in 평택AK플라자
            </div>
            <div>
              <RxCheck size='30' color='#3cb371' />
              L'Occitane in 숙명여대
            </div>
          </S.IntroDiv>
        </S.NaratorDiv> */}
        <S.FittingDiv id='fitting'>
          <S.MarginDiv></S.MarginDiv>
          <S.CareerDate>2013.07 - 2014.05</S.CareerDate>
          <S.IntroDiv>
            <h1>피팅모델</h1>
            <div>
              <RxCheck size='30' color='#3cb371' />
              M.Holiday 의류 피팅모델 근무 경험
            </div>
          </S.IntroDiv>
        </S.FittingDiv>
      </S.CareerDiv>
    </S.CareerContainer>
  );
};

export default Career;

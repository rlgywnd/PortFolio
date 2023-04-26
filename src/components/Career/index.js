import * as S from './style';
import { RxCheck } from 'react-icons/rx';

const Career = () => {
  return (
    <S.CareerContainer id='career'>
      <S.TitleUnderlineDiv>
        <S.CareerTitleH1>CAREER.</S.CareerTitleH1>
      </S.TitleUnderlineDiv>
      <S.CareerDiv>
        <S.NaratorDiv id='narator'>
          <S.MarginDiv></S.MarginDiv>
          <S.CareerDate>2016.01 - 2017.05</S.CareerDate>
          <S.IntroDiv>
            <h1>나레이터모델</h1>
            <div>
              <RxCheck size='30' color='#3cb371' />
              행사 / 판촉 나레이터모델 근무
            </div>
            <div>
              <RxCheck size='30' color='#3cb371' />
              Galaxy S8 in 평택AK플라자 Galaxy S8 홍보
            </div>
            <div>
              <RxCheck size='30' color='#3cb371' />
              L'Occitane in 숙명여대 화장품 홍보
            </div>
            <div>
              <RxCheck size='30' color='#3cb371' />
              편안한 분위기로 커뮤니케이션 할 수 있었습니다.
            </div>
          </S.IntroDiv>
        </S.NaratorDiv>
        <S.FittingDiv id='fitting'>
          <S.MarginDiv></S.MarginDiv>
          <S.CareerDate>2013.07 - 2014.05</S.CareerDate>
          <S.IntroDiv>
            <h1>피팅모델</h1>
            <div>
              <RxCheck size='30' color='#3cb371' />
              M.Holiday 의류 피팅모델 근무
            </div>
          </S.IntroDiv>
        </S.FittingDiv>
      </S.CareerDiv>
    </S.CareerContainer>
  );
};

export default Career;

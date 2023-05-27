import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../../recoil/darkmode';

const Career = () => {
  const isDark = useRecoilValue(darkmode);

  return (
    <S.CareerContainer id='career'>
      <S.TitleUnderlineDiv isdark={isDark}>
        <S.CareerTitleH1>CAREER.</S.CareerTitleH1>
      </S.TitleUnderlineDiv>
      <S.CareerDiv>
        <S.NaratorDiv id='narator'>
          <S.MarginDiv></S.MarginDiv>
          <S.CareerDate isdark={isDark}>2016.01 - 2017.05</S.CareerDate>
          <S.IntroDiv>
            <h1>나레이터모델</h1>
            <h2>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              행사 / 안내 나레이터모델 근무
            </h2>
            <h2>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              Galaxy S8 in 평택AK플라자 Galaxy S8 시현
            </h2>
            <h2>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              L'Occitane in 숙명여대 축제 L'Occitane 프로모션
            </h2>
          </S.IntroDiv>
        </S.NaratorDiv>
        <S.FittingDiv id='fitting'>
          <S.MarginDiv></S.MarginDiv>
          <S.CareerDate isdark={isDark}>2013.07 - 2014.05</S.CareerDate>
          <S.IntroDiv>
            <h1>피팅모델</h1>
            <h2>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              M.Holiday 의류 피팅모델 근무
            </h2>
          </S.IntroDiv>
        </S.FittingDiv>
      </S.CareerDiv>
    </S.CareerContainer>
  );
};

export default Career;

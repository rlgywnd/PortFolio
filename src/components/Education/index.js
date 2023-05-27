import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import r1 from '../../assets/r1.png';
import r2 from '../../assets/r2.png';
import r3 from '../../assets/r3.png';
import r4 from '../../assets/r4.png';
import r5 from '../../assets/r5.png';
import r6 from '../../assets/r6.png';
import r7 from '../../assets/r7.png';
import r8 from '../../assets/r8.png';
import r9 from '../../assets/r9.png';
import r11 from '../../assets/r11.png';
import r12 from '../../assets/r12.png';
import r13 from '../../assets/r13.png';
import r14 from '../../assets/r14.png';
import r15 from '../../assets/r15.png';
import r16 from '../../assets/r16.png';
import r17 from '../../assets/r17.png';
import r18 from '../../assets/r18.png';
import r19 from '../../assets/r19.png';
import r20 from '../../assets/r20.png';
import r21 from '../../assets/r21.png';
import r22 from '../../assets/r22.png';
import r23 from '../../assets/r23.png';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../../recoil/darkmode';

const Education = () => {
  const isDark = useRecoilValue(darkmode);
  const [rating, setRating] = useState(false);

  return (
    <S.EduContainer id='education'>
      <S.TitleUnderlineDiv isdark={isDark}>
        <S.EduTitleH1>EDUCATION.</S.EduTitleH1>
      </S.TitleUnderlineDiv>
      <S.EduDiv>
        <S.CodeStatesDiv id='codestates'>
          <S.MarginDiv></S.MarginDiv>
          <S.EduDate isdark={isDark}>2022.06 - 2022.12</S.EduDate>
          <S.IntroDiv>
            <h1>코드스테이츠(Code States)</h1>
            <h2>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              software engineering bootcamp, Front-end(40기)
            </h2>
            <h2>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              Javascript언어 기반으로 프론트엔드 과정 학습
            </h2>
            <h2>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              React 중심 WEB 구현
            </h2>
            <h2>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              Node.JS / EXPRESS 로 웹 서버구축
            </h2>
            <h2>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              페어 프로그래밍 협업 & 코드 리뷰 경험
            </h2>
            <h2>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              알고리즘 문제 풀이
            </h2>
            <h2>
              <RxCheck
                size='30'
                color={isDark ? 'rgb(248,206,7)' : '#3cb371'}
              />
              팀 프로젝트 개발 경험
            </h2>
          </S.IntroDiv>
          <S.RatingTitleH1>수강생들의 나에 대한 협업 평가</S.RatingTitleH1>
          <S.RatingContainer>
            <S.RatingTextAndBtn
              rating={rating}
              isdark={isDark}
              onClick={() => {
                setRating(!rating);
              }}
            >
              <S.RatingTextDiv isdark={isDark}>협업 평가</S.RatingTextDiv>
              <S.RatingBtnDiv rating={rating}>
                <MdOutlineKeyboardArrowDown
                  size='25'
                  color={isDark ? 'white' : '#667085'}
                />
              </S.RatingBtnDiv>
            </S.RatingTextAndBtn>
            <S.RatingImgContainer rating={rating}>
              <h1>오른쪽 넘겨보기</h1>
              <S.RatingImgDiv>
                <img src={r9} alt='빔'></img>
                <img src={r13} alt='빔'></img>
                <img src={r15} alt='빔'></img>
                <img src={r1} alt='빔'></img>
                <img src={r2} alt='빔'></img>
                <img src={r3} alt='빔'></img>
                <img src={r4} alt='빔'></img>
                <img src={r5} alt='빔'></img>
                <img src={r6} alt='빔'></img>
                <img src={r7} alt='빔'></img>
                <img src={r8} alt='빔'></img>
                <img src={r11} alt='빔'></img>
                <img src={r12} alt='빔'></img>
                <img src={r14} alt='빔'></img>
                <img src={r16} alt='빔'></img>
                <img src={r17} alt='빔'></img>
                <img src={r18} alt='빔'></img>
                <img src={r19} alt='빔'></img>
                <img src={r20} alt='빔'></img>
                <img src={r21} alt='빔'></img>
                <img src={r22} alt='빔'></img>
                <img src={r23} alt='빔'></img>
              </S.RatingImgDiv>
            </S.RatingImgContainer>
          </S.RatingContainer>
        </S.CodeStatesDiv>
      </S.EduDiv>
    </S.EduContainer>
  );
};

export default Education;

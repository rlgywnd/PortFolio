import * as S from './style';
import { RxCheck } from 'react-icons/rx';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../../../recoil/darkmode';
import { gitUrl, blogUrl } from 'constants/url';

const AboutMe = () => {
  const isDark = useRecoilValue(darkmode);

  return (
    <S.AboutMeContainer id='about_me'>
      <S.TitleUnderlineDiv isdark={isDark}>
        <S.AboutMeTitleH1>ABOUT ME.</S.AboutMeTitleH1>
      </S.TitleUnderlineDiv>
      <S.AboutMeProfileDiv id='profile'>
        <S.ProfileImgDiv></S.ProfileImgDiv>
        <S.ProfileUl>
          <S.ProfileLi>
            <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
            <h4>Name</h4>
            <h4>:</h4>
            <div>김효중</div>
          </S.ProfileLi>
          <S.ProfileLi>
            <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
            <h4>Email</h4>
            <h4>:</h4>
            <div>rlgywnd@naver.com</div>
          </S.ProfileLi>
          <S.ProfileLi isdark={isDark}>
            <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
            <h4>GitHub</h4>
            <h4>:</h4>
            <span>
              <h5
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  window.open(gitUrl);
                }}
              >
                https://github.com/rlgywnd
              </h5>
            </span>
          </S.ProfileLi>
          <S.ProfileLi isdark={isDark}>
            <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
            <h4>Blog</h4>
            <h4>:</h4>
            <span>
              <h5
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  window.open(blogUrl);
                }}
              >
                https://velog.io/@hyo123
              </h5>
            </span>
          </S.ProfileLi>
          <S.ProfileLi>
            <RxCheck size='30' color={isDark ? 'rgb(248,206,7)' : '#3cb371'} />
            <h4>Phone</h4>
            <h4>:</h4>
            <div>010-9603-0416</div>
          </S.ProfileLi>
        </S.ProfileUl>
      </S.AboutMeProfileDiv>
      <S.IntroDiv id='intro'>
        <S.IntroUl>
          <S.IntroLi isdark={isDark}>
            <h1>INTRO.</h1>
            <div>
              <span>JavaScript</span> 언어와 <span>React</span> 중심으로
            </div>
            <div>웹 개발을 하며 프론트엔드 개발자를 꿈꾸는 김효중입니다.</div>
            <br />
            <div>
              문제를 해결할 때, <span>왜?</span> 라는 생각을 많이 하며 제대로
              이해하고 해결할 때 보람을 느낍니다.
            </div>
            <div>
              협업할 때, 상대의 의사를 <span>존중</span>하고 귀 기울여 들으려
              노력하는 편입니다.
            </div>
            <br />
            <div>
              뒤처지는 걸 싫어하며, 새로운 걸 배우며 다양하게 경험을 쌓고
              싶습니다.
            </div>
            <div>
              UI/UX를 고려하여 <span>1px</span>이라도 수정하여 사용자를 위한 웹
              서비스를 만들고 싶습니다.
            </div>
            <br />
            <div>
              최근 사이드 프로젝트를 진행하며 사용했던 <span>TypeScript</span>와{' '}
              <span>NextJS</span>에 대해 학습하고 있고,
            </div>
            <div>
              기존 프로젝트를 효율적인 폴더 구조와 컴포넌트 분리에 대해 고민하며
              리팩토링 하고 있습니다.
            </div>
          </S.IntroLi>
        </S.IntroUl>
      </S.IntroDiv>
    </S.AboutMeContainer>
  );
};

export default AboutMe;

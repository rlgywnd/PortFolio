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
              <span>1px</span>이라도 수정하여 사용자에게 만족감을 주는
              프론트엔드 개발자를 꿈꾸고 있습니다 .
            </div>
            <br />
            <div>
              문제를 해결할 때, <span>왜?</span> 라는 생각을 많이 하며 이해하고
              해결할 때 재미를 느껴 개발을 좋아하게 되었습니다.
            </div>
            <br />
            <div>
              뒤처지는 게 싫어 새로운 기술 학습에도 관심이 많지만, 앞서 배웠던
              기술을 좀 더 깊이 있게 파보는 걸 더 좋아하는 편입니다.
            </div>
            <br />
            <div>
              어려워도 계속하면 저의 것으로 만들어 왔기에 끝없이{' '}
              <span>도전</span>하며 성장하기 위해 노력하고 있습니다.
            </div>
          </S.IntroLi>
        </S.IntroUl>
      </S.IntroDiv>
    </S.AboutMeContainer>
  );
};

export default AboutMe;

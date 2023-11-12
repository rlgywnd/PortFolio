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
            <div>01096030416</div>
          </S.ProfileLi>
        </S.ProfileUl>
      </S.AboutMeProfileDiv>
      <S.IntroDiv id='intro'>
        <S.IntroUl>
          <S.IntroLi isdark={isDark}>
            <h1>INTRO.</h1>
            <div>
              <span>왜?</span> 라는 생각을 하며 이해될 때까지 파고들어 문제를
              해결할 때 성취감이 좋아서 개발을 하고 있습니다.
            </div>
            <br />
            <div>
              뒤처지는 게 싫어 새로운 기술 학습에도 관심이 많지만, 앞서 배웠던
              기술을 좀 더 깊이 있게 파보는 걸 더 좋아하는 편입니다.
            </div>
            <br />
            <div>
              학습할 때, 배운 것을 <span>응용</span>하며 저만의 방식으로
              이해하며 학습하길 좋아합니다.
            </div>
            <br />
            <div>
              상대를 <span>존중</span>하는 자세로 대화하며 협업하려 하고, 배운
              것을 공유하며 피드백 받길 좋아합니다.
            </div>
            <br />
            <div>
              <span>1px</span>이라도 수정하여 사용자에게 만족감을 주는
              프론트엔드 개발자가 되겠습니다.
            </div>
          </S.IntroLi>
        </S.IntroUl>
      </S.IntroDiv>
    </S.AboutMeContainer>
  );
};

export default AboutMe;

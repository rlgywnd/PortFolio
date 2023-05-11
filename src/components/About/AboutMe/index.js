import * as S from './style';
import { RxCheck } from 'react-icons/rx';

const AboutMe = () => {
  const blogUrl = 'https://velog.io/@hyo123';
  const gitUrl = 'https://github.com/rlgywnd';

  return (
    <S.AboutMeContainer id='about_me'>
      <S.TitleUnderlineDiv>
        <S.AboutMeTitleH1>ABOUT ME.</S.AboutMeTitleH1>
      </S.TitleUnderlineDiv>
      <S.AboutMeProfileDiv id='profile'>
        <S.ProfileImgDiv></S.ProfileImgDiv>
        <S.ProfileUl>
          <S.ProfileLi>
            <RxCheck size='30' color='#3cb371' />
            <h4>NAME</h4>
            <h4>:</h4>
            <div>김효중</div>
          </S.ProfileLi>
          <S.ProfileLi>
            <RxCheck size='30' color='#3cb371' />
            <h4>EMAIL</h4>
            <h4>:</h4>
            <div>rlgywnd@naver.com</div>
          </S.ProfileLi>
          <S.ProfileLi>
            <RxCheck size='30' color='#3cb371' />
            <h4>GITHUB</h4>
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
          <S.ProfileLi>
            <RxCheck size='30' color='#3cb371' />
            <h4>BLOG</h4>
            <h4>:</h4>
            <span>
              <h5
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => {
                  window.open(blogUrl);
                }}
              >
                https://velog.io/@hyo123
              </h5>
            </span>
          </S.ProfileLi>
          <S.ProfileLi>
            <RxCheck size='30' color='#3cb371' />
            <h4>PHONE</h4>
            <h4>:</h4>
            <div>010-9603-0416</div>
          </S.ProfileLi>
        </S.ProfileUl>
      </S.AboutMeProfileDiv>
      <S.IntroDiv id='intro'>
        <S.IntroUl>
          <S.IntroLi>
            <h1>INTRO.</h1>
            <div>💡 Javascript 언어와 REACT 중심으로</div>
            <div>
              WEB 개발을 공부하고 있는 프론트엔드 개발자를 꿈꾸는 김효중입니다.
            </div>
            <br />
            <div>
              문제를 해결할때, 왜? 라는 생각을 많이 하며 제대로 이해하고
              해결하는 걸 좋아하는 편입니다.
            </div>
            <br />
            <div>
              사용자의 편의와 서비스의 유용성을 더한 웹 서비스를 만드는 개발자가
              되고 싶습니다.
            </div>
            <div>
              UI/UX를 생각하며 1px이라도 불편하다면 수정하는 걸 좋아합니다.
            </div>
            <div>
              사용자에게 좋은 경험을 전달하는 일에 보람을 느끼고, 다양하게
              도전하며 경험을 쌓고 싶습니다.
            </div>
            <br />
            <div>
              최근 TypeScript와 NextJS를 공부하고 있고, 기존 프로젝트를 효율적인
              폴더 구조와 컴포넌트 분리에 대해 고민하고 있습니다.
            </div>
            <br />
            <div>
              상대를 존중 하는 커뮤니케이션과 협업, 그리고 사용자를 생각하는
              UI/UX에 최선의 노력을 하고 싶습니다.
            </div>
          </S.IntroLi>
        </S.IntroUl>
      </S.IntroDiv>
    </S.AboutMeContainer>
  );
};

export default AboutMe;

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
              WEB 개발을 공부하며 프론트엔드 개발자를 꿈꾸는 김효중입니다.
            </div>
            <br />
            <div>
              문제를 해결할 때, <span>왜?</span> 라는 생각을 많이 하며 제대로
              이해하고 해결하는 걸 좋아하는 편입니다.
            </div>
            <div>
              협업할 때, 상대를 존중하는 커뮤니케이션하는 걸 좋아합니다.
            </div>
            <br />
            <div>
              사용자에게 좋은 경험을 전달하는 일에 보람을 느끼고, 다양하게
              도전하며 경험을 쌓고 싶습니다.
            </div>
            <div>
              UI/UX를 고려하여 1px이라도 수정하여 사용자를 위한 웹 서비스를
              만들고 싶습니다.
            </div>
            <br />
            <div>
              최근 사이드 프로젝트를 진행하며 사용했던 <span>TypeScript</span>와{' '}
              <span>NextJS</span>에 대해 공부하고 있고,
            </div>
            <div>
              기존 프로젝트를 효율적인 폴더 구조와 컴포넌트 분리에 대해 고민하며
              리팩토링 하고 있습니다.
            </div>
            <br />
            <div>
              상대를 존중하는 커뮤니케이션과 협업, 그리고 사용자를 생각하는
              UI/UX에 최선의 노력을 하고 싶습니다.
            </div>
          </S.IntroLi>
        </S.IntroUl>
      </S.IntroDiv>
    </S.AboutMeContainer>
  );
};

export default AboutMe;

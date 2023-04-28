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
              WEB 개발을 공부하고 있는 프론트엔드 개발자를 꿈꾸는 김효중 입니다.
            </div>
            <br />
            <div>
              개발자라는 직업에 관심을 갖게 되어 프론트엔드 개발자가 되기 위해
            </div>
            <div>
              독학을 하다 깊게 배워보고 싶어 웹 개발 부트 캠프 코드스테이츠를
              수료하였습니다.
            </div>
            <br />
            <div>
              비전공자에 컴퓨터로는 게임만 할 줄 알던 저에겐 처음에는 코딩의
              진입장벽이 너무 높았습니다.
            </div>
            <div>다른사람들과 페어프로그래밍을 할때마다</div>
            <div>다들 잘알고 잘하는걸 느끼고 좌절할 뻔 했습니다. </div>
            <div>하지만, 포기않고 도전하였고 팀원과 협업을 하며 </div>
            <div>적응하고 해결해나가는 저의 모습에 가능성을 보았습니다.</div>
            <br />
            <div>
              아직도 많이 어렵지만 계속 도전하며 문제를 차근차근 해결해 나갈때면
            </div>
            <div>너무 재밌기에 계속해서 성장하고 싶습니다.</div>
            <br />
            <div>
              팀원과의 협업과 포기하지않고 도전하는 걸 가장 중요시하는 개발자가
              되고싶습니다.
            </div>
          </S.IntroLi>
        </S.IntroUl>
      </S.IntroDiv>
    </S.AboutMeContainer>
  );
};

export default AboutMe;

import * as S from './style';

const AboutMe = () => {
  const blogUrl = 'https://velog.io/@hyo123';
  const gitUrl = 'https://github.com/rlgywnd';

  return (
    <S.AboutMeContainer id='about_me'>
      <S.TitleUnderlineDiv>
        <S.AboutMeTitleH1>ABOUT ME</S.AboutMeTitleH1>
      </S.TitleUnderlineDiv>
      <S.AboutMeProfileDiv>
        <S.ProfileImgDiv>
          <div></div>
        </S.ProfileImgDiv>
        <S.ProfileUl id='프로필'>
          <S.ProfileLi id='name'>
            <div>NAME</div>
            <div>:</div>
            <div>김효중</div>
          </S.ProfileLi>
          <S.ProfileLi id='email'>
            <div>EMAIL</div>
            <div>:</div>
            <div>rlgywnd@naver.com</div>
          </S.ProfileLi>
          <S.ProfileLi id='github'>
            <div>GITHUB</div>
            <div>:</div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.open(gitUrl);
              }}
            >
              https://github.com/rlgywnd
            </div>
          </S.ProfileLi>
          <S.ProfileLi id='blog'>
            <div>BLOG</div>
            <div>:</div>
            <div
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                window.open(blogUrl);
              }}
            >
              https://velog.io/@hyo123
            </div>
          </S.ProfileLi>
          <S.ProfileLi id='phone'>
            <div>PHONE</div>
            <div>:</div>
            <div>010-9603-0416</div>
          </S.ProfileLi>
        </S.ProfileUl>
      </S.AboutMeProfileDiv>
      <S.IntroUl id='intro'>
        <S.IntroLi>
          💡 Javascript 언어와 REACT 중심으로
          <br /> WEB 개발을 공부하고 있는 프론트엔드 개발자 김효중 입니다.{' '}
          <br />
          개발자라는 직업에 대한 관심을 갖게 되어 프론트엔드 개발자가 되기 위해
          <br />
          독학을 하다 웹 개발 부트 캠프인 코드스테이츠를 수료하였습니다.
          <br />
          부트 캠프에서 팀 프로젝트를 두 번 경험하며 협업의 중요성과 두려움을
          떨치고
          <br /> 도전하는 건 성장의 발판이라는 걸 배웠습니다.
          <br /> 프로젝트 중 문제에 직면했던 적이 많았는데, 그때마다
          백엔드,프론트엔드 분들과 <br />
          자주 소통을 하여 문제에 직면해도 금방 해결책을 찾을 수 있었고
          <br /> 더 넓은 시야로 프로젝트에 임할 수 있었습니다.
          <br /> 프로젝트 초기에 역할 분담 중 제가 경험해 본 적 없던 부분을
          적극적으로 나서서 맡았습니다.
          <br /> 많은 어려움에 직면하여 후회도 하긴 했지만 끝까지 포기하지 않고
          노력하여
          <br /> 원하던 결과를 내보이던 저의 가능성을 보았습니다.
          <br /> 협업의 중요성과 도전하는 마음으로 프론트엔드 개발자가 되기 위해
          지식과 경험을 쌓는 중 입니다.
        </S.IntroLi>
      </S.IntroUl>
    </S.AboutMeContainer>
  );
};

export default AboutMe;

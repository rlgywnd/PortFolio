import * as S from './style';

const AboutMe = () => {
  return (
    <S.AboutMeContainer id='about_me'>
      <S.AboutMeTitleDiv>ABOUT ME</S.AboutMeTitleDiv>
      <div>
        <div>img</div>
        <div id='프로필'>
          <div id='name'>
            <div>NAME : </div>
            <div>김효중</div>
          </div>
          <div id='email'>
            <div>EMAIL : </div>
            <div>rlgywnd@naver.com</div>
          </div>
          <div id='github'>
            <div>GITHUB : </div>
            <div>https://github.com/rlgywnd</div>
          </div>
          <div id='blog'>
            <div>BLOG : </div>
            <div>https://velog.io/@hyo123</div>
          </div>
          <div id='phone'>
            <div>PHONE : </div>
            <div>010-9603-0416</div>
          </div>
        </div>
      </div>
      <div id='intro'>
        <div>
          💡 Javascript 언어와 REACT 중심으로 WEB 개발을 공부하고 있는
          프론트엔드 개발자 김효중 입니다. 개발자라는 직업에 대한 관심을 갖게
          되어 프론트엔드 개발자가 되기 위해 독학을 하다 웹 개발 부트 캠프인
          코드스테이츠를 수료하였습니다. 부트 캠프에서 팀 프로젝트를 두 번
          경험하며 협업의 중요성과 두려움을 떨치고 도전하는 건 성장의 발판이라는
          걸 배웠습니다. 프로젝트 중 문제에 직면했던 적이 많았는데, 그때마다
          백엔드,프론트엔드 분들과 자주 소통을 하여 문제에 직면해도 금방
          해결책을 찾을 수 있었고 더 넓은 시야로 프로젝트에 임할 수 있었습니다.
          프로젝트 초기에 역할 분담 중 제가 경험해 본 적 없던 부분을 적극적으로
          나서서 맡았습니다. 많은 어려움에 직면하여 후회도 하긴 했지만 끝까지
          포기하지 않고 노력하여 원하던 결과를 낼 수 있었습니다. 팀원과 하나
          라는 생각과 언제나 포기하지 않고 도전해보려는 생각을 갖고 꾸준히
          성장하는 프론트엔드 개발자가 되고 싶습니다.
        </div>
      </div>
    </S.AboutMeContainer>
  );
};

export default AboutMe;

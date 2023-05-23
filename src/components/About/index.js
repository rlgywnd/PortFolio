import * as S from './style';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <S.AboutContainer id='about'>
      <S.ShortAboutDiv>
        <S.ShortAboutSection>
          {/* <div>항상 도전하는</div> */}
          <div>이해될 때까지 가는</div>
          <div>
            <span>김효중</span>
            <div>입니다.</div>
          </div>
        </S.ShortAboutSection>
        <S.ShortAboutTextDiv>
          {/* <div>프론트엔드 개발자를 꿈꾸고 있습니다.</div> */}
          <div>항상 왜? 라 생각하며 이해될 때까지</div>
          <div>학습하여 내 것으로 만들겠습니다.</div>
          <div>뒤처지는 거 질색입니다. 언제나 배우며</div>
          {/* <div>지식과 경험을 천천히 쌓아가고 있습니다.</div> */}
          <div>포기하지 않고 끝까지 가겠습니다.</div>
        </S.ShortAboutTextDiv>
        <S.ArrowContainer>
          <S.ArrowDiv>
            <Link to='about_me' spy={true} smooth={true}>
              ''
            </Link>
          </S.ArrowDiv>
        </S.ArrowContainer>
      </S.ShortAboutDiv>
    </S.AboutContainer>
  );
};

export default About;

import * as S from './style';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <S.AboutContainer id='about'>
      <S.ShortAboutDiv>
        <section>
          <div>항상 도전하는</div>
          <span>김효중</span>입니다.
        </section>
        <div>
          <div>프론트엔드 개발자를 꿈꾸고 있습니다.</div>
          <div>지식과 경험을 천천히 쌓아가고 있습니다.</div>
          <div>포기하지않고 끝까지 도전하겠습니다.</div>
        </div>
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

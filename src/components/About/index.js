import * as S from './style';
import { Link } from 'react-scroll';
import AboutMe from './AboutMe';

const About = () => {
  return (
    <S.AboutContainer id='about'>
      <S.ShortAboutDiv>
        <p>
          <h1>도전을 좋아하는</h1> <span>김효중</span>입니다.
        </p>
        <div>
          <div>프론트엔드 개발자를 꿈꾸고 있습니다.</div>
          <div>부족한 지식과 경험을 천천히 쌓아가고 있습니다.</div>
        </div>
        <div>
          <S.ArrowDiv>
            <Link to='about_me' spy={true} smooth={true}>
              ''
            </Link>
          </S.ArrowDiv>
        </div>
      </S.ShortAboutDiv>
    </S.AboutContainer>
  );
};

export default About;

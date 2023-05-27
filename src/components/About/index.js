import * as S from './style';
import { Link } from 'react-scroll';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../../recoil/darkmode';

const About = () => {
  const isDark = useRecoilValue(darkmode);
  return (
    <S.AboutContainer id='about'>
      <S.ShortAboutDiv>
        <S.ShortAboutSection isdark={isDark}>
          <div>이해될 때까지 하는</div>
          <div>
            <span>김효중</span>
            <div>입니다.</div>
          </div>
        </S.ShortAboutSection>
        <S.ShortAboutTextDiv>
          <div>매번 왜? 라 생각하며 이해될 때까지</div>
          <div>학습하여 내 것으로 만드는 편입니다.</div>
          <div>뒤처지는 거 싫어합니다. 언제나 배우며</div>
          <div>포기않고 계속 성장하고 싶습니다.</div>
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

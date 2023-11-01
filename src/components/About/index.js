import * as S from './style';
import { Link } from 'react-scroll';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../../recoil/darkmode';

const About = () => {
  const isDark = useRecoilValue(darkmode);
  return (
    <S.AboutContainer id='about'>
      <S.ShortAboutDiv isdark={isDark}>
        <S.ShortAboutSection isdark={isDark}>
          <div>기록을 좋아하는</div>
          <div>
            <span>김효중</span>
            <div>입니다.</div>
          </div>
        </S.ShortAboutSection>
        <S.ShortAboutTextDiv>
          <div>배운 걸 기록하며 이해될 때까지 학습합니다.</div>
          <div>뒤처지는 게 싫어, 새로운 거에 도전하길 좋아합니다.</div>
          <div>배우려는 자세로 수용하고 성장하겠습니다.</div>
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

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
          <div>프론트엔드 개발자</div>
          <div>
            <span>김효중</span>
            <div>입니다.</div>
          </div>
        </S.ShortAboutSection>
        <S.ShortAboutTextDiv>
          <div>배운 걸 기록하며 다양하게 응용하며 학습하길 좋아합니다.</div>
          <div>왜?라는 생각으로 이해될 때까지 파고들며 학습합니다.</div>
          <div>혼자 해야 할 땐 자기주도적으로 학습하길 좋아하고</div>
          <div>배운 것을 팀원과 공유하며 피드백 받길 좋아합니다.</div>
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

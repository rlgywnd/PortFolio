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
          <div>도전하길 좋아하는</div>
          <div>
            <span>김효중</span>
            <div>입니다.</div>
          </div>
        </S.ShortAboutSection>
        <S.ShortAboutTextDiv>
          <div>이해될 때까지 기록하며 </div>
          <div>학습하는걸 좋아합니다.</div>
          <div>뒤처지는 거 싫어합니다.</div>
          {/* <div>계속해서</div> */}
          <div>계속해서 성장하고 싶습니다.</div>
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

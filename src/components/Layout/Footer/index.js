import * as S from './style';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../../../recoil/darkmode';

const Footer = () => {
  const isDark = useRecoilValue(darkmode);

  return (
    <S.FooterContainer>
      <S.FooterTextDiv isdark={isDark}>
        Copyright 2023@ Kim HyoJung all rights reserved.
      </S.FooterTextDiv>
    </S.FooterContainer>
  );
};

export default Footer;

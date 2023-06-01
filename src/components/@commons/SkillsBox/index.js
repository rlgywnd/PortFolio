import * as S from './style';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import { darkmode } from 'recoil/darkmode';
import { useState } from 'react';

const SkillsBox = ({ title, detail }) => {
  const isDark = useRecoilValue(darkmode);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.SkillsSection>
      <S.SkillsTextAndBtn
        isopen={isOpen}
        isdark={isDark}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <S.SkillName isdark={isDark}>{title}</S.SkillName>
        <S.BtnDiv isopen={isOpen}>
          <MdOutlineKeyboardArrowDown
            size='25'
            color={isDark ? 'white' : '#667085'}
          />
        </S.BtnDiv>
      </S.SkillsTextAndBtn>
      <S.TextDiv isopen={isOpen} isdark={isDark}>
        <S.SkillDetail isdark={isDark}>{detail}</S.SkillDetail>
      </S.TextDiv>
    </S.SkillsSection>
  );
};

export default SkillsBox;

import * as S from './style';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import { darkmode } from '../../../recoil/darkmode';
import { useState } from 'react';

const VideoBox = ({ title, video }) => {
  const isDark = useRecoilValue(darkmode);
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.VideoTextAndBtn
        open={open}
        isdark={isDark}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <S.VideoText isdark={isDark}>{title}</S.VideoText>
        <S.VideoBtnDiv open={open}>
          <MdOutlineKeyboardArrowDown
            size='25'
            color={isDark ? 'white' : '#667085'}
          />
        </S.VideoBtnDiv>
      </S.VideoTextAndBtn>
      <S.VideoDiv open={open}>
        <S.Video controls='controls' src={video} alt='빔'></S.Video>
      </S.VideoDiv>
    </>
  );
};

export default VideoBox;

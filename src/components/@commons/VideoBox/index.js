import * as S from './style';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const VideoBox = ({ open, setOpen, title, video }) => {
  return (
    <>
      <S.VideoTextAndBtn
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <S.VideoText>{title}</S.VideoText>
        <S.VideoBtnDiv open={open}>
          <MdOutlineKeyboardArrowDown size='25' color='#667085' />
        </S.VideoBtnDiv>
      </S.VideoTextAndBtn>
      <S.VideoDiv open={open}>
        <S.Video controls='controls' src={video} alt='빔'></S.Video>
      </S.VideoDiv>
    </>
  );
};

export default VideoBox;

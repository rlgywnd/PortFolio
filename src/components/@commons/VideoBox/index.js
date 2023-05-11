import * as S from './style';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
// import { useState } from 'react';

const VideoBox = ({ open, setOpen, title, video }) => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <S.VideoTextAndBtn
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <S.VideoText>{title}</S.VideoText>
        <S.VideoUyouMainBtnDiv open={open}>
          <MdOutlineKeyboardArrowDown size='25' color='#667085' />
        </S.VideoUyouMainBtnDiv>
      </S.VideoTextAndBtn>
      <S.VideoUyouMainDiv open={open}>
        <S.UyouMainVideo
          controls='controls'
          src={video}
          alt='빔'
        ></S.UyouMainVideo>
      </S.VideoUyouMainDiv>
      {/* {} */}
      {/* <VideoTextAndBtn
        uyoumain={uyouMain}
        onClick={() => {
          setUyouMain(!uyouMain);
        }}
      >
        <VideoText>메인화면</VideoText>
        <S.VideoUyouMainBtnDiv uyoumain={uyouMain}>
          <MdOutlineKeyboardArrowDown size='25' color='#667085' />
        </S.VideoUyouMainBtnDiv>
      </VideoTextAndBtn>
      <S.VideoUyouMainDiv uyoumain={uyouMain}>
        <S.UyouMainVideo
          controls='controls'
          src={uyoumain}
          alt='빔'
        ></S.UyouMainVideo>
      </S.VideoUyouMainDiv> */}
    </>
  );
};

export default VideoBox;

import styled from 'styled-components';

export const VideoTextAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 45px;
  padding: 0 15px 0 15px;
  cursor: pointer;
  border-radius: 2px;
`;

export const VideoText = styled.div`
  font-size: 14px;
`;

export const VideoBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.open ? 'rotate(180deg)' : '')};
`;

export const VideoDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s linear;
  max-height: 0;
  max-height: ${(props) => (props.open ? '100vh' : '0')};
  margin-bottom: 7px;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  padding: 15px;
  padding: ${(props) => (props.open ? '15px' : '0')};
  margin-bottom: ${(props) => (props.open ? '30px' : '0px')};
  background-color: white;
`;

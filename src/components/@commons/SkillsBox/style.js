import styled from 'styled-components';

export const SkillsSection = styled.div`
  margin-bottom: 7px;
`;

// Skills 이름 + 화살표버튼 담은 Div
export const SkillsTextAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
  height: 45px;
  padding: 0 15px 0 15px;
  cursor: pointer;
  border-radius: 2px;
`;
// Skill 이름 Div
export const SkillName = styled.div`
  color: ${(props) => (props.isdark ? 'white' : 'black')};
  font-size: 14px;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.isopen ? 'rotate(180deg)' : '')};
`;

export const TextDiv = styled.div`
  color: ${(props) => (props.isdark ? 'white' : 'black')};
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
  max-height: ${(props) => (props.isopen ? '100vh' : '0')};
`;
export const SkillDetail = styled.div`
  padding: 25px 15px 25px 15px;
  line-height: 30px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  font-weight: bolder;
  font-family: 'NEXON Lv2 Gothic' !important;
  background-color: ${(props) => (props.isdark ? '#313233' : 'white')};
`;

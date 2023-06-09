import styled from 'styled-components';

export const FooterContainer = styled.div`
  flex: 1;
`;

export const FooterTextDiv = styled.div`
  font-family: 'NEXON Lv2 Gothic' !important;
  font-weight: bolder;
  height: 200px;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isdark ? '#313233' : '#696969')};
  @media (max-width: 1100px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
  @media (max-width: 390px) {
    font-size: 13px;
  }
`;

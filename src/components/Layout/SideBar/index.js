import * as S from './style';

const SideBar = ({ children }) => {
  console.log('Sidebar children : ', children);
  return (
    <S.SideBarReal>
      <S.SideBarContainer>
        <ul>
          <li>이름</li>
          <li>폰</li>
          <li>나이</li>
        </ul>
      </S.SideBarContainer>
      <div>
        {children.map((el) => {
          return <S.AllComponentsDiv key={el.key}>{el}</S.AllComponentsDiv>;
        })}
      </div>
    </S.SideBarReal>
  );
};

export default SideBar;

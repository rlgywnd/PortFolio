import * as S from './style';

const Home = () => {
  return (
    <S.HomeContainer>
      <S.TextDiv>
        <S.TitleDiv>김효중 포트폴리오</S.TitleDiv>
        <div>
          <S.LinkDiv to={'/main'}>CLICK!</S.LinkDiv>
        </div>
      </S.TextDiv>
    </S.HomeContainer>
  );
};

export default Home;

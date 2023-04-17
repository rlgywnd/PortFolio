import * as S from './style';
// import Main from './main';
// import Projects from './projects';

const Home = () => {
  return (
    <S.HomeContainer>
      <S.TextDiv>
        <S.TitleDiv>김효중 포트폴리오</S.TitleDiv>
        <div>
          <S.LinkDiv to={'/main'}>CLICK!</S.LinkDiv>
        </div>
      </S.TextDiv>
      {/* <Main />
      <Projects /> */}
    </S.HomeContainer>
  );
};

export default Home;

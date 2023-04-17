import { Link } from 'react-router-dom';
import * as S from './style';
import Layout from 'components/Layout';
import Skills from '../../components/Skills';
import About from 'components/About';
import AboutMe from 'components/About/AboutMe';

const Main = () => {
  const components = [<About />, <AboutMe />, <Skills />];

  return (
    <S.MainContainer>
      <Layout children={components}>
        {/* <div>여기는 메인 페이지!</div>
        <Link to={'/'}>Home으로 가기</Link> */}
      </Layout>
    </S.MainContainer>
  );
};

export default Main;

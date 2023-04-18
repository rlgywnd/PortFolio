import * as S from './style';
import Layout from 'components/Layout';
import Skills from '../../components/Skills';
// import About from 'components/About';
import AboutMe from 'components/About/AboutMe';
import React from 'react';
// import SideBar from 'components/Layout/SideBar';
import Projects from '../../components/Projects';

const Main = () => {
  const components = [<AboutMe />, <Skills />, <Projects />];

  return (
    <S.MainContainer>
      <Layout children={React.Children.toArray(components)}></Layout>
    </S.MainContainer>
  );
};

export default Main;

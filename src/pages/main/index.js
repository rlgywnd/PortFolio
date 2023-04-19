import * as S from './style';
import Layout from 'components/Layout';
import AboutMe from 'components/About/AboutMe';
import React from 'react';
import Projects from '../../components/Projects';

const Main = () => {
  const components = [<AboutMe />, <Projects />];

  return (
    <S.MainContainer>
      <Layout children={React.Children.toArray(components)}></Layout>
    </S.MainContainer>
  );
};

export default Main;

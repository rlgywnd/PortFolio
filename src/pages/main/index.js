import * as S from './style';
import Layout from 'components/Layout';
import AboutMe from 'components/About/AboutMe';
import React from 'react';
import Projects from '../../components/Projects';
import Education from 'components/Education';
import Career from 'components/Career';
import Studies from 'components/Studies';

const Main = () => {
  const components = [
    <AboutMe />,
    <Projects />,
    <Education />,
    <Career />,
    <Studies />,
  ];

  return (
    <S.MainContainer>
      <Layout children={React.Children.toArray(components)}></Layout>
    </S.MainContainer>
  );
};

export default Main;

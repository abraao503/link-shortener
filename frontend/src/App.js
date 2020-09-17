import React from 'react';

import GlobalStyles from './styles/global';
import { Container, Logo } from './styles';
import logoChaordic from './assets/logo-chaordic.png';

import Main from './components/Main';
import TopFive from './components/TopFive';
import Hits from './components/Hits';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Logo src={logoChaordic} alt="logo-chaordic" className="logo"/>
        <Main />
        <TopFive />
        <Hits />
        <Footer />
      </Container>
    </>
  );
}

export default App;

import React from 'react';

import { Container, Footer, Header, Main } from '@components';

const Home: React.FC = () => {

  console.log('env', process.env.customKey);
  
  return (
    <Container className="flex flex-col h-screen">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default Home;

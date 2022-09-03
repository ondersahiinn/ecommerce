import React from 'react';

import { Container, Footer, Header, Main } from '@components';

const Home: React.FC = () => {


  return (
    <Container className="flex flex-col h-screen">
      {/* <Header /> */}
      <Main />
      <Footer />
    </Container>
  );
};

export default Home;

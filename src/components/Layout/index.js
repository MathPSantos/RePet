import React from 'react';

import {
  Container,
  Main
} from './styles';

import Navbar from '../Navbar';

import Footer from '../Footer';

const Layout = ({ colored, children }) => {
  return (
    <Container>
      <Navbar colored={colored} />

      <Main>
        {children}
      </Main>

      <Footer />
    </Container>
  );
};

export default Layout;

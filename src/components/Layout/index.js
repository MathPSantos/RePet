import React from 'react';

import {
  Container,
  Content,
} from './styles';

import Navbar from '../Navbar';

import Footer from '../Footer';

const Layout = ({ colored, children }) => {
  return (
    <Container>
      <Navbar colored={colored} />

      <Content>
        {children}
      </Content>

      <Footer />
    </Container>
  );
};

export default Layout;

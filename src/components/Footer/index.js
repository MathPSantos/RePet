import React from 'react';

import {
  Container,
  Content
} from './styles';

import WhiteLogo from '../../assets/images/white-logo.svg'; 

const Footer = () => {
  return (
    <Container>
      <Content>
        <img src={WhiteLogo} alt="RePet"/>

        <p>© Todos os direitos reservados, 2020</p>
      </Content>
    </Container>
  ); 
};

export default Footer;

import React, { useState } from 'react';
import { FiArrowLeft, FiCheckSquare, FiSquare } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import GreenLogo from '../../assets/images/green-logo.svg';

import {
  Container,
  Content,
  Navbar,
  NavContent,
  Button
} from './styles';

import { Heading } from "../../components/Typography";

const Login = () => {
  const history = useHistory();

  const [remember, setRemember] = useState(false);

  return(
    <Container>
      <Navbar>
        <NavContent>
          <img style={{cursor: 'pointer'}} onClick={() => history.push('/')} src={GreenLogo} alt="RePet"/>

          <button style={{cursor: 'pointer'}} onClick={() => history.goBack()}>
            <FiArrowLeft size={18} color='#FFFFFF' />
          </button>
        </NavContent>
      </Navbar>

      <Content>
        <Heading color='green'>Login</Heading>

        <form action="">
          <div className="input-group">
            <label htmlFor="email-input">email</label>

            <input id='email-input' placeholder='Escreva seu email' type="text"/>
          </div>

          <div className="input-group">
            <label htmlFor="senha-input">senha</label>

            <input id='senha-input' placeholder='Escreva sua senha' type="text"/>
          </div>

          <div className="form-actions">
            <div style={{cursor: 'pointer'}} className="remember-container">
              {remember ? (<FiCheckSquare onClick={() => setRemember(!remember)} size={20} color='#19992E' />) : (<FiSquare onClick={() => setRemember(!remember)} size={20} color='#19992E' />)}
            
              <span onClick={() => setRemember(!remember)}>Lembrar de mim</span>
            </div>

            <span>Esqueci minha senha</span>
          </div>

          <Button label='Entrar'/>
        </form>
      </Content>
    </Container>
  )
}

export default Login;

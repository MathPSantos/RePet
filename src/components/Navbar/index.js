import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import WhiteLogo from '../../assets/images/white-logo.svg';
import GreenLogo from '../../assets/images/green-logo.svg';


import {
    Header,
    Content,
    Navlinks,
    Burguer,
    Button
} from './styles';

const Navbar = ({ colored }) => {
    const [active, setActive] = useState(false);
    
    return (
        <Header>
            <Content colored={colored}>
                <img src={ colored ? GreenLogo : WhiteLogo } alt="RePet" />

                <Navlinks colored={colored} active={active}>
                    <ul>
                        <li>
                            <Link to='/'>
                                Como jogar
                            </Link>
                        </li>

                        <li>
                            <Link to='/'>
                                Medalhas e Desafios
                            </Link>
                        </li>

                        <Button nav label='Entrar'/>
                    </ul>
                </Navlinks>

                <Burguer colored={colored} active={active} onClick={() => setActive(!active)}>
                    <div/>
                    <div/>
                    <div/>
                </Burguer>

                <Button label='Entrar' />
            </Content>
        </Header>
    );
};

export default Navbar;

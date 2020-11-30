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

                <Navlinks active={active}>
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

                <Burguer active={active} onClick={() => setActive(!active)}>
                    <div className={active && 'active'}/>
                    <div className={active && 'active'}/>
                    <div className={active && 'active'}/>
                </Burguer>

                <Button label='Entrar' />
            </Content>
        </Header>
    );
};

export default Navbar;

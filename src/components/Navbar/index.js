import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = ({ color }) => {
    const [active, setActive] = useState(false);
    
    return (
        <header>
            <div className="header-content">

                <div className="logo-box">
                    <img src="" alt="" />
                </div>

                <div className={`navlinks-container ${active && 'active'}`}>
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
                    </ul>
                </div>

                <div className="burger-box" onClick={() => setActive(!active)}>
                    <div className={active && 'active'}/>
                    <div className={active && 'active'}/>
                    <div className={active && 'active'}/>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

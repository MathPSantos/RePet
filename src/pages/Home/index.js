import React from 'react';
import { Flat } from '../../components/Button';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
        <>
            <Navbar colored />
            <h1>Home</h1>
            <Flat label='Participe do RePet'/>
        </>
    )
};

export default Home;

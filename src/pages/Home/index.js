import React from 'react';

import Layout from '../../components/Layout';
import { Heading, Paragraph } from '../../components/Typography';
import { Flat } from '../../components/Button';

import {
    LandingSec,
    LandingCon
} from './styles.js';

const Home = () => {
    return (
        <Layout as='main'>
            <LandingSec>
                <LandingCon>

                    <Heading
                        resAlign='center'
                        color='white'
                    >
                        Você está preparado pro futuro?
                    </Heading>

                    <Paragraph
                        resAlign='center'
                        color='white'
                    >
                        O  jogo RePet te convida a fazer parte do projeto piloto da cidade do futuro, mas para isso você precisa adquirir as doze insígnias animalias e se tornar um cidadão responsável.
                    </Paragraph>

                    <Flat label='Participe do RePet' />
                </LandingCon>
            </LandingSec>
        </Layout>
    )
};

export default Home;

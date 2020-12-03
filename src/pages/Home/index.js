import React from 'react';

import Layout from '../../components/Layout';
import { Heading, Paragraph } from '../../components/Typography';
import { Flat } from '../../components/Button';

// import useWindowDimensions from '../../hooks/windowSize';

import {
    LandingSec,
    LandingCon,
    Section,
    SectionCon,
    TextContainer
} from './styles.js';

import GameIlustration from '../../assets/images/game-ilustration.png';
import Avatar from '../../assets/images/avatar.png';

import WaveGreen from '../../assets/images/wave-green.svg';
import WaveWhite from '../../assets/images/wave-white.svg';

const Home = () => {
    // const { width } = useWindowDimensions();

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
            <Section>
                <SectionCon>
                    <TextContainer>
                        <Heading
                            size='small'
                        >
                            A diversão que vai além do ambiente digital!
                        </Heading>

                        <Paragraph>Seu lixo agora vale muitos pontos e consquistas. Participe ativamente por meio da coleta seletiva e conecte-se ao mundo real.</Paragraph>
                    </TextContainer>

                    <img src={GameIlustration} alt="Ilustração"/>
                </SectionCon>

                <img src={WaveGreen} alt=''/>
            </Section>

            <Section color='green' >
                <SectionCon reverse >
                    <TextContainer>
                        <Heading
                            size='small'
                            color='white'
                        >
                            Pontue, conquiste, cumpra missões e transforme
                        </Heading>

                        <Paragraph 
                            color='white'
                        >Todos os dias novos desafios serão apresentados, duele com seus amigos e compartilhe suas vitórias. </Paragraph>
                    </TextContainer>

                    <img src={GameIlustration} alt="Ilustração"/>
                </SectionCon>

                <img src={WaveWhite} alt=''/>
            </Section>

            <Section>
                <SectionCon>
                    <TextContainer>
                        <Heading
                            size='small'
                        >
                           Cusomize seu avatar com a sua cara
                        </Heading>

                        <Paragraph>Seu avatar é um reflexo de você ou de quem você quer ser, por isso é você quem deixa ele do jeitinho que quiser. </Paragraph>
                    </TextContainer>

                    <img src={Avatar} alt="Avatar"/>
                </SectionCon>

                <img src={WaveGreen} alt=''/>
            </Section>

            <Section color='green' >
                <SectionCon reverse >
                    <TextContainer>
                        <Heading
                            size='small'
                            color='white'
                        >
                            Pontue, conquiste, cumpra missões e transforme
                        </Heading>

                        <Paragraph 
                            color='white'
                        >Todos os dias novos desafios serão apresentados, duele com seus amigos e compartilhe suas vitórias. </Paragraph>
                    </TextContainer>

                    <img src={GameIlustration} alt="Ilustração"/>
                </SectionCon>
            </Section>
        </Layout>
    )
};

export default Home;

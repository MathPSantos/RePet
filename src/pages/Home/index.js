import React from "react";

import Layout from "../../components/Layout";
import { Heading, Paragraph } from "../../components/Typography";
import { Flat } from "../../components/Button";

import useWindowDimensions from "../../hooks/windowSize";

import {
  LandingSec,
  LandingCon,
  Section,
  SectionCon,
  TextContainer,
  RanklingCon,
} from "./styles.js";

import Background from "../../assets/images/landing-background.svg";
import Ilustration from "../../assets/images/landing-ilustration.svg";
import GameIlustration from "../../assets/images/game-ilustration.png";
import Missions1 from "../../assets/images/missions1.svg";
import Missions2 from "../../assets/images/missions2.svg";
import Avatar from "../../assets/images/avatar.png";
import Ranking1 from "../../assets/images/ranking1.svg";
import Ranking2 from "../../assets/images/ranking2.svg";

import WaveGreen from "../../assets/images/wave-green.svg";
import WaveWhite from "../../assets/images/wave-white.svg";

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <Layout as="main">
      <LandingSec>
        <LandingCon>
          <Heading resAlign="center" color="white">
            Você está preparado pro futuro?
          </Heading>

          <Paragraph resAlign="center" color="white">
            O jogo RePet te convida a fazer parte do projeto piloto da cidade do
            futuro, mas para isso você precisa adquirir as doze insígnias
            animalias e se tornar um cidadão responsável.
          </Paragraph>

          <Flat label="Participe do RePet" />
        </LandingCon>

        <img className="background" src={Background} alt=""/>
        <img className="ilustration" src={Ilustration} alt=""/>
      </LandingSec>

      <Section>
        <SectionCon>
          <TextContainer>
            <Heading size="sm">
              A diversão que vai além do ambiente digital!
            </Heading>

            <Paragraph>
              Seu lixo agora vale muitos pontos e consquistas. Participe
              ativamente por meio da coleta seletiva e conecte-se ao mundo real.
            </Paragraph>
          </TextContainer>

          <img src={GameIlustration} alt="Ilustração" />
        </SectionCon>

        <img src={WaveGreen} alt="" />
      </Section>

      <Section color="green">
        <SectionCon reverse>
          <TextContainer>
            <Heading size="sm" color="white">
              Pontue, conquiste, cumpra missões e transforme
            </Heading>

            <Paragraph color="white">
              Todos os dias novos desafios serão apresentados, duele com seus
              amigos e compartilhe suas vitórias.{" "}
            </Paragraph>
          </TextContainer>

          <img src={width <= 860 ? Missions2 : Missions1} alt="Ilustração" />
        </SectionCon>

        <img src={WaveWhite} alt="" />
      </Section>

      <Section>
        <SectionCon>
          <TextContainer>
            <Heading size="sm">Cusomize seu avatar com a sua cara</Heading>

            <Paragraph>
              Seu avatar é um reflexo de você ou de quem você quer ser, por isso
              é você quem deixa ele do jeitinho que quiser.{" "}
            </Paragraph>
          </TextContainer>

          <img src={Avatar} alt="Avatar" />
        </SectionCon>

        <img src={WaveGreen} alt="" />
      </Section>

      <Section color="green">
        <RanklingCon>
          <Heading resAlign="center" size="sm" align="center" color="white">
            Veja como está a sua pontuação e dos outros participantes da sua
            escola
          </Heading>

          <Paragraph
            style={{ marginTop: 18, marginBottom: 60 }}
            resAlign="center"
            align="center"
            color="white"
          >
            Acompanhe o Ranking e descubra uma sociedade disposta a escrever o
            futuro.
          </Paragraph>

          <img src={width <= 860 ? Ranking2 : Ranking1} alt="Ilustração" />

          <Heading
            style={{ marginTop: 40, marginBottom: 24 }}
            resAlign="center"
            size="sm"
            align="center"
            color="white"
          >
            Vamos mudar a realidade juntos?
          </Heading>

          <Flat label="Participe do RePet" />
        </RanklingCon>
      </Section>
    </Layout>
  );
};

export default Home;

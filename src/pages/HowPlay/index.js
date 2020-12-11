import React from "react";

import Layout from "../../components/Layout";
import { Heading, Paragraph } from "../../components/Typography";
import { Flat } from "../../components/Button";
import {
  LandingSec,
  LandingCon,
  RulesContainer,
  RulesContent,
  DetritosContainer,
  DetritosContent,
  BannerContainer,
  BannerContent,
} from "./styles";

import useWindowDimensions from "../../hooks/windowSize";

import Detritos1 from "../../assets/images/detritos1.svg";
import Detritos2 from "../../assets/images/detritos2.svg";

import WaveGreen from "../../assets/images/wave-green.svg";
import WaveWhite from "../../assets/images/wave-white.svg";

const HowPlay = () => {
  const { width } = useWindowDimensions();

  return (
    <Layout colored>
      <LandingSec>
        <LandingCon>
          <Heading resAlign="center">
            O que você faz com os hábitos sustentáveis?{" "}
            <Heading as="span" color="green">
              RePet!
            </Heading>
          </Heading>

          <Paragraph resAlign="center" bold>
            Os pontos de coleta seletiva estão estratégicamente posicionados em
            sua escola. Ao descartar seus resíduos corretamente seu código é
            computado e seus pontos são acumulados em seu perfil.
          </Paragraph>
        </LandingCon>

        <img src={WaveGreen} alt="Ilustração" />
      </LandingSec>

      <RulesContainer>
        <RulesContent>
          <div>
            <Heading color="white" size="sm">
              Como participar?
            </Heading>

            <ul>
              <li>
                1. Cadastre-se no site, encontre sua escula e crie seu avatar.
              </li>
              <li>
                2. Realize as missões, faça o descarte correto de resíduos e
                acumule pontos.
              </li>
              <li>3. Acompanhe suas conquistas e o Ranking da escola.</li>
            </ul>
          </div>

          <div className="second">
            <Heading color="white" size="sm">
              Objetivo
            </Heading>

            <p>Se tornar um cidadão apto a viver na cidade do futuro.</p>

            <Heading color="white" size="sm">
              Regras
            </Heading>

            <ul>
              <li>1. Matrícula em uma das escolas participantes.</li>
              <li>2. Descarte correto do lixo nos pontos de coleta.</li>
            </ul>
          </div>
        </RulesContent>

        <img src={WaveWhite} alt="Ilustração" />
      </RulesContainer>

      <DetritosContainer>
        <DetritosContent>
          <Heading size="sm">Os Detritos</Heading>

          <img src={width <= 860 ? Detritos2 : Detritos1} alt="Ilustração" />
        </DetritosContent>

        <img src={WaveGreen} alt="Ilustração" />
      </DetritosContainer>

      <BannerContainer>
        <BannerContent>
          <div>
            <Heading resAlign="center" align="center" color="white" size="sm">
              Sua escola já faz parte?
            </Heading>

            <Flat label="Participar do RePet" />
          </div>

          <div>
            <Heading resAlign="center" align="center" color="white" size="sm">
              É professor e quer implementar na sua escola?
            </Heading>

            <Flat label="Em breve..." />
          </div>
        </BannerContent>
      </BannerContainer>
    </Layout>
  );
};

export default HowPlay;

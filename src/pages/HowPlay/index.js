import React from "react";

import Layout from "../../components/Layout";
import { Heading, Paragraph } from "../../components/Typography";
import { LandingSec, LandingCon } from "./styles";

const HowPlay = () => {
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
      </LandingSec>
    </Layout>
  );
};

export default HowPlay;

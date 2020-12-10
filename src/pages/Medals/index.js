import React, { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import { Heading, Paragraph } from "../../components/Typography";

import Autonomia from "../../assets/images/medals/autonomia.png";
import Determinacao from "../../assets/images/medals/determinacao.png";
import Empatia from "../../assets/images/medals/empatia.png";
import Percepcao from "../../assets/images/medals/percepcao.png";
// import Platina from "../../assets/images/medals/platina.png";
import Resistencia from "../../assets/images/medals/resistencia.png";
import Sabedoria from "../../assets/images/medals/sabedoria.png";
import Sagacidade from "../../assets/images/medals/sagacidade.png";
import Tenacidade from "../../assets/images/medals/tenacidade.png";
import Vitalidade from "../../assets/images/medals/vitalidade.png";
import Zelo from "../../assets/images/medals/zelo.png";

import {
  MedalsContainer,
  MedalsContent,
  MedalsList,
  MedalInfo,
  MedalInfoContent,
} from "./styles";

const medals = [
  {
    name: "Autonomia do Boto Cor de Rosa",
    nickname: "Boto Cor de Rosa",
    image: Autonomia,
    imageAlt: "Autonomia",
    description:
      "O Boto cor de Rosa é um mamífero flexível e agil que vive em águas doces.",
    power:
      "Autonomia de princípios éticos, democráticos, inclusivos e sustentáveis.",
  },
  {
    name: "Zelo do Mico Leão Dourado",
    nickname: "Mico Leão Dourado",
    image: Zelo,
    imageAlt: "Zelo",
    description: "Cuidado: com a natureza e a vida terrestre",
    power: "Zelo do Mico Leão Dourado",
  },
  {
    name: "Determinação do Pica Pau",
    nickname: "Pica Pau",
    image: Determinacao,
    imageAlt: "Determinação",
    description: "Comprometido e determinado com o seu objetivo de salvar o meio ambiente",
    power: "Determinação do Pica Pau Amarelo",
  },
  {
    name: "Sabedoria do Tamandua ",
    nickname: "Tamandua",
    image: Sabedoria,
    imageAlt: "Sabedoria",
    description: " Capacidade cognitiva: mudar hábitos de destinação dos resíduos e propagar a cultura da reciclagem e do consumo consciente ",
    power: "Sabedoria do Tamandua Bandeira",
  },
  {
    name: "Empatia do Tatu Bola",
    nickname: "Tatu Bola",
    image: Empatia,
    imageAlt: "Empatia",
    description: "Altruísta/ desambição ao fazer o bem",
    power: "Empatia do Tatu Bola",
  },
  {
    name: "Resistência da Jararaca Ilhoa",
    nickname: "Jararaca Ilhoa",
    image: Resistencia,
    imageAlt: "Resistência",
    description: "Focado e cauteloso para conscientizar sobre o consumo excessivo, gerando a exploração exagerda dos recursos naturais para o mercado",
    power: "Resistencia da Jararaca Ilhoa",
  },
  {
    name: "Sagacidade da Onça Pintada",
    nickname: "Onça Pintada",
    image: Sagacidade,
    imageAlt: "Sagacidade",
    description: "Perspicácia para sanar/ conter o aquecimento global",
    power: "Sagacidade da onça pintada",
  },
  {
    name: "Percepção da Baleia Azul",
    nickname: "Baleia Azul",
    image: Percepcao,
    imageAlt: "Percepção",
    description: "Atencioso e curioso: aos cuidados do descarte correto, e que procura; pesquisar sobre a importancia da preservação das espécies",
    power: "Percepção da Baleia Azul",
  },
  {
    name: "Tenacidade do Lobo Guará",
    nickname: "Lobo Guará",
    image: Tenacidade,
    imageAlt: "Tenacidade",
    description: "Sensato e consciencioso: para cessar o desmatamento",
    power: "Tenacidade do Lobo Guará",
  },
  {
    name: "Vitalidade da Arara Azul",
    nickname: "Arara Azul",
    image: Vitalidade,
    imageAlt: "Vitalidade",
    description: "Senso de justiça: para com o intuito de persuadir contra a caça das espécies pelo homem ",
    power: "",
  },
  // {
  //   name: "Platina",
  //   nickname: "Platina",
  //   image: Platina,
  //   imageAlt: "Platina",
  //   description: "Vitalidade da arara azul",
  //   power: "",
  // },
];

const Medals = () => {
  const [medalId, setMedalId] = useState(0);

  useEffect(() => {
    const slider = document.querySelector(".items");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  });

  return (
    <Layout colored as="main">
      <MedalsContainer>
        <MedalsContent>
          <Heading>
            As{" "}
            <Heading color="green" as="span">
              Medalhas
            </Heading>
          </Heading>

          <Paragraph>
            Conhecidas como insígnias animalias, estas joias poderosas precisam
            ser conquistadas! Seus poderes refletem hábitos e caracteristicas
            especiais encontradas na espécie embaixadora.
          </Paragraph>

          <MedalsList className="items">
            {medals.map((item, index) => (
              <li 
                key={index} 
                style={{cursor: 'pointer'}} 
                onClick={() => setMedalId(index)}
              >
                <img src={item.image} alt={item.imageAlt} />

                <p>{item.name}</p>
              </li>
            ))}
          </MedalsList>

          <MedalInfo>
            <MedalInfoContent>
              <Heading>
                Medalha:{" "}
                <Heading color="green" as="span">
                  {medals[medalId].nickname}
                </Heading>
              </Heading>

              <h3>Definição</h3>
              <p>{medals[medalId].description}</p>

              <h3>Poder</h3>
              <p>
              {medals[medalId].power}
              </p>
            </MedalInfoContent>

            <img src={medals[medalId].image} alt={medals[medalId].imageAlt} />
          </MedalInfo>
        </MedalsContent>
      </MedalsContainer>
    </Layout>
  );
};

export default Medals;

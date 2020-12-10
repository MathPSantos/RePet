import React, { useEffect } from "react";

import Layout from "../../components/Layout";
import { Heading, Paragraph } from "../../components/Typography";

import Autonomia from "../../assets/images/autonomia.svg";

import { MedalsContainer, MedalsContent, MedalsList } from "./styles";

const Medals = () => {
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
            <li>
              <img src={Autonomia} alt="Autonomia" />

              <p>Autonomia do Boto Cor de Rosa</p>
            </li>

            <li>
              <img src={Autonomia} alt="Autonomia" />

              <p>Autonomia do Boto Cor de Rosa</p>
            </li>

            <li>
              <img src={Autonomia} alt="Autonomia" />

              <p>Autonomia do Boto Cor de Rosa</p>
            </li>

            <li>
              <img src={Autonomia} alt="Autonomia" />

              <p>Autonomia do Boto Cor de Rosa</p>
            </li>

            <li>
              <img src={Autonomia} alt="Autonomia" />

              <p>Autonomia do Boto Cor de Rosa</p>
            </li>

            <li>
              <img src={Autonomia} alt="Autonomia" />

              <p>Autonomia do Boto Cor de Rosa</p>
            </li>
            <li>
              <img src={Autonomia} alt="Autonomia" />

              <p>Autonomia do Boto Cor de Rosa</p>
            </li>
          </MedalsList>
        </MedalsContent>
      </MedalsContainer>
    </Layout>
  );
};

export default Medals;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import WhiteLogo from "../../assets/images/white-logo.svg";
import GreenLogo from "../../assets/images/green-logo.svg";

import { Header, Content, Navlinks, Burguer, Button } from "./styles";

export function debounce(func, wait = 5, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const Navbar = ({ colored }) => {
  const [active, setActive] = useState(false);

  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(
    () => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", debounce(handleScroll));
      return () => window.removeEventListener("scroll", debounce(handleScroll));
    },
    [] // If you remove this, things go 🍌🍌🍌
  );

  return (
    <Header scrolled={scrollY >= 100 ? true : false}>
      <Content colored={colored}>
        <Link to="/">
          <img
            src={colored || scrollY >= 100 ? GreenLogo : WhiteLogo}
            alt="RePet"
          />
        </Link>

        <Navlinks
          scrolled={scrollY >= 100 ? true : false}
          colored={colored}
          active={active}
        >
          <ul>
            <li>
              <Link to="/como-jogar">Como jogar</Link>
            </li>

            <li>
              <Link to="/medalhas">Medalhas e Desafios</Link>
            </li>

            <Button to="/login" nav label="Entrar" />
          </ul>
        </Navlinks>

        <Burguer
          colored={colored}
          scrolled={scrollY >= 100 ? true : false}
          active={active}
          onClick={() => setActive(!active)}
        >
          <div />
          <div />
          <div />
        </Burguer>

        <Button label="Entrar" />
      </Content>
    </Header>
  );
};

export default Navbar;

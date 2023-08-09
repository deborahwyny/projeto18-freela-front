import React from "react";
import styled from "styled-components";
import logo from "../assets/miau.png";



export default function Logo() {
  return <LogoImage src={logo} alt="Logo do Miau" />;
}


const LogoImage = styled.img`
  /* Estilos opcionais para a imagem */
`;
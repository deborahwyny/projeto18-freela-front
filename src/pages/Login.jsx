import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"
import Logo from "../components/Logo";

export default function Login() {
  return (
    <ConteinerLogin>
      <Logo /> 
      <Formulario>
        <input type="text" placeholder="E-mail" required/>
        <input type="text" placeholder="Senha" required/>
        <button type="submit">Entrar</button>
      </Formulario>
      <span>Primeira vez? Cadastre-se!</span>
    </ConteinerLogin>
  );
}


const ConteinerLogin = styled.div`
    height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


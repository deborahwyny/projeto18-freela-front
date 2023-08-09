import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"
import Logo from "../components/Logo";

export default function Login() {
  return (


    <ConteinerLogin>
         <Logo /> 
      <Formulario>
      <Input type="text" placeholder="E-mail" required/> 
        <Input type="text" placeholder="Senha" required/> 
        <Link to="/cadastro"><Button type="submit">Entrar</Button></Link>
      </Formulario>
     
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
    gap: 15px;
    
`
const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border-width: 0px;
  border-color: #CCCCCC;
  background-color: #FFFFFF;
  color: #000000;
  border-style: solid;
  border-radius: 18px;
  box-shadow: 0px 0px 2px rgba(140, 125, 164, 0.63);
  text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.1);
  
  &:focus {
    outline: none;
  }
`;

const Button = styled.a`
  background: linear-gradient(to right,#8c7da4 ,#8c7da4);
 background-color: #8c7da4;
  color: #fff;
  font-family: Georgia;
  font-size: 18px;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
  padding: 14px 15px;
  border: 0px solid #000;
  border-radius: 10px;
  display: inline-block;
  transition: background 0.3s, background-color 0.3s, transform 0.3s;
  
  &:hover {
    background: linear-gradient(to right, #aba1b8, #85779c);
    background-color: #aba1b8;
  }
  
  &:active {
    transform: scale(0.95);
  }
`;
















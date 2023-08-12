import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"; 
import Logo from "../components/Logo";
import apiAuth from "../services/apiAuth";

export default function Login() {

  const [form, setForm] = useState({email: "", senha: ""})
  const navigate = useNavigate()

  function formulario(e){
    setForm({...form, [e.target.name]:[e.target.value]})
  
  }



  function logando(e){
    e.preventDefault()
    apiAuth.login(form)
      .then( res =>{
        console.log(res.data)
        navigate("/")

      })
      .catch(err =>{
        console.log(err.response.data)
        alert(err.response.data)


      })



  }

  return (


    <ConteinerLogin>
         <Logo /> 
         <Formulario onSubmit={logando}>
      <Input type="email" placeholder="E-mail" name= "email" value={form.email} required onChange={formulario}/> 
        <Input type="password" placeholder="Senha" name="senha" value={form.senha} required onChange={formulario}/> 
        <Button type="submit">Entrar</Button>
      </Formulario>
      <Link to="/cadastro"><Cadastro>Primeiro acesso?</Cadastro> </Link>
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
    max-width: 300px;
  width: 100%;
    
`;
const Input = styled.input`
width: 100%;
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

const Cadastro = styled.h2`
 font-size: 20px;
  color: #8c7da4;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  
`















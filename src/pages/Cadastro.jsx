import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"; 
import CadastreImage from "../assets/cadastre-se.png";
import apiAuth from "../services/apiAuth";
import { useState } from "react";



export default function Cadastro() {
    const [form, setForm] = useState({nome:"", cpf:"", telefone:"", email: "", senha: "", senha:"", confirmar_senha:""})
    const navigate = useNavigate()


    function formulario(e){
        setForm({...form, [e.target.name]:e.target.value})

      }

      const body = {
        nome: form.nome,
        cpf: form.cpf,
        telefone:form.telefone,
        email: form.email,
        senha: form.senha,
        confirmar_senha: form.confirmar_senha
      };    
  

    function cadastroLogin(e) {
        e.preventDefault()
        console.log(form)

        if (form.senha !== form.confirmar_senha) {
            alert("As senhas não coincidem. Verifique os campos de senha.");
            return;
          }
      console.log("body", body)
        apiAuth.cadastro(body)
          .then( res =>{
            console.log(res)
            navigate("/")
    
          })
          .catch(err =>{
            console.log(err.response)
            alert(err.response)
    
    
          })

        
    }

    return (
        <ConteinerLogin>
            <Form onSubmit={cadastroLogin}>
                <ImageContainer>
                    <CadastreImageStyled src={CadastreImage} alt="Imagem de Cadastre-se" />
                </ImageContainer>
                <Input placeholder="Nome" type="text" name="nome" value={form.nome}  required onChange={formulario}/>
                <Input placeholder="CPF" type="text" required name="cpf" value={form.cpf} onChange={formulario}/>
                <Input placeholder="Telefone" type="text" required name="telefone" value={form.telefone} onChange={formulario}/>
                <Input placeholder="E-mail" type="email" name="email" value={form.email}  required onChange={formulario}/>
                <Input placeholder="Senha" type="password" name="senha" value={form.senha} required onChange={formulario}/>
                <Input placeholder="Confirme a senha" type="password" name="confirmar_senha" required value={form.confirmar_senha} onChange={formulario}/>
                    <SubmitButton type="submit">Cadastrar</SubmitButton>
                    <Link to="/login"><Login>Já tem uma conta? Faça login!</Login> </Link>
                
            </Form>

        </ConteinerLogin>
    );
}

const ConteinerLogin = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  
`;

const Form = styled.form`
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.85);
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
`;

const ImageContainer = styled.div`
    width: 65%;
    display: flex;
    justify-content: center;
`;

const CadastreImageStyled = styled.img`
    max-width: 100%;
    height: auto;
`;

const Input = styled.input`
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;
    font-size: 0.8rem;
    width: 100%;
    outline: none;
`;

const SubmitButton = styled.button`
    border: none;
    background-color: #8c7da4;
    padding: 0.4rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.93rem;
    transition: background-color 0.3s;
    outline: none;

    &:hover {
        background-color: #6b63fff1;
    }
`;

const Login = styled.h2`
    font-size: 16px;
  color: #8c7da4;
  margin-top: 6px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CadastreImage from "../assets/cadastre-se.png";

export default function Cadastro() {
    function cadastroLogin() {
        
    }

    return (
        <ConteinerLogin>
            <Form>
                <ImageContainer>
                    <CadastreImageStyled src={CadastreImage} alt="Imagem de Cadastre-se" />
                </ImageContainer>
                <Input placeholder="Nome" type="text" name="name" required />
                <Input placeholder="E-mail" type="email" name="email" required />
                <Input placeholder="Telefone" type="text" required />
                <Input placeholder="CPF" type="text" required />
                <Input placeholder="Senha" type="password" required name="senha" />
                <Input placeholder="Confirme a senha" type="password" required />
                <Link to="/">
                    <SubmitButton type="submit">Cadastrar</SubmitButton>
                </Link>
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

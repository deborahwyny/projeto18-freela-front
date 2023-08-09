import React from "react"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"




export default function Cadastro(){


    function cadastroLogin(){
        
    }

    return (
        <ConteinerLogin>
            <form>
                <input placeholder="Nome" type="text" name="name" required />
                <input placeholder="E-mail" type="email" name="email" required />
                <input placeholder="Telefone" type="text" required/>
                <input placeholder="CPF" type="text" required/>
                <input placeholder="Senha" type="password" required name="senha"/>
                <input  placeholder="Confirme a senha" type="password"required/>
                <Link to="/"><button type="submit">Cadastrar</button></Link>
            </form>
        </ConteinerLogin>
    )
}


const ConteinerLogin = styled.div`
    height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
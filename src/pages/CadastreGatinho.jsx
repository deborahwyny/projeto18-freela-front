import React, { useContext, useState } from "react";
import styled from 'styled-components';
import Cadastre from "../assets/cadastre.png";
import { Link, useNavigate } from "react-router-dom"; 
import apiAuth from "../services/apiAuth";
import { UserContext } from "../context/UserContext"



export default function RegistrationCard() {


  const [form, setForm] = useState({text: "", tutor: "", nome:"", telefone:"", url:"", valor:""})
  const {user, setUser} = useContext(UserContext)

  const navigate = useNavigate()

  function formulario(e){
    setForm({...form, [e.target.name]:e.target.value})
  
  }

  const body = {
    caracteristica: form.text,
    nome_tutor: form.tutor,
    nome_gatinho:form.nome,
    telefone_contato: form.telefone,
    disponivel: true,
    url: form.url,
    valor: form.valor
  };  





  function cadastreGatinho(e){
    e.preventDefault()
    console.log(form)
    console.log("oi",user)
    apiAuth.cadastreGatinho(body,user)
      .then( res =>{
        console.log(res.data)
      
        navigate("/home")

      })
      .catch(err =>{
        console.log(err.response.data)
        alert(err.response.data)


      })
  }

  return (
    
    <CenteredContainer>
     <ButtonContainer>
      <Link to="/home"><BackButton to="/home">Voltar para o Home</BackButton> </Link>
        
      </ButtonContainer>
      <Card>
        <CardContent>
          <CadastreLogo src={Cadastre} alt="Cadastre"/>
          <Form onSubmit={cadastreGatinho}>
            <FormGroup>
              <Label>Característica:</Label>
              <Input type="text" name= "text" value={form.text} required onChange={formulario}/>
            </FormGroup>
            <FormGroup>
              <Label>Nome do Tutor:</Label>
              <Input type="text" name= "tutor" value={form.tutor} required onChange={formulario}/>
            </FormGroup>
            <FormGroup>
              <Label>Nome do Gatinho:</Label>
              <Input type="text" name= "nome" value={form.nome} required onChange={formulario}/>
            </FormGroup>
            <FormGroup>
              <Label>Telefone de Contato:</Label>
              <Input type="tel" name= "telefone" value={form.telefone} required onChange={formulario}/>
            </FormGroup>
            <FormGroup>
              <Label>Url</Label>
              <Input type="text" name= "url" value={form.url} required onChange={formulario}/>
            </FormGroup>
            <FormGroup>
              <Label>Valor</Label>
              <Input type="number" name= "valor" value={form.valor} required onChange={formulario}/>
            </FormGroup>
            <SubmitButton type="submit">Cadastrar</SubmitButton>
          </Form>
        </CardContent>
      </Card>
      {/* <GifLink href="https://i.gifer.com/YC7t.gif" target="_blank">
        <GifImage src="https://i.gifer.com/YC7t.gif" alt="Gatinha" />
      </GifLink> */}
    </CenteredContainer>
  );
}

const ButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const BackButton = styled(Link)`
  text-decoration: none;
  background-color: #8c7da4;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6c549e;
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CadastreLogo = styled.img`
  width: 100%; 
  max-width: 200px; 
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #b435c4;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5c468a;
  }
`;

// const GifLink = styled.a`
//   position: absolute;
//   bottom: 10px;
//   left: 10px;
//   display: block;
// `;

// const GifImage = styled.img`
//   width: 60%;
//   height: 60%;
//   border-radius: 50%;
// `;

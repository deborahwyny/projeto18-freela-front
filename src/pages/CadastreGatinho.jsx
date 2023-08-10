import React from 'react';
import styled from 'styled-components';
import Cadastre from "../assets/cadastre.png"

export default function RegistrationCard() {
  return (
    <CenteredContainer>
      <Card>
        <CardContent>
          <CadastreLogo src={Cadastre} alt="Cadastre"/>
          <Form>
            <FormGroup>
              <Label>Característica:</Label>
              <Input type="text" />
            </FormGroup>
            <FormGroup>
              <Label>Nome do Tutor:</Label>
            </FormGroup>
            <FormGroup>
              <Label>Nome do Gatinho:</Label>
              <Input type="text" />
            </FormGroup>
            <FormGroup>
              <Label>Telefone de Contato:</Label>
              <Input type="tel" />
            </FormGroup>
            <SubmitButton type="submit">Cadastrar</SubmitButton>
          </Form>
        </CardContent>
      </Card>
      <GifLink href="https://i.gifer.com/YC7t.gif" target="_blank">
        <GifImage src="https://i.gifer.com/YC7t.gif" alt="Gatinha" />
      </GifLink>
    </CenteredContainer>
  );
}

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

const GifLink = styled.a`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: block;
`;

const GifImage = styled.img`
  width: 60%;
  height: 60%;
  border-radius: 50%;
`;
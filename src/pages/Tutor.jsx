import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import apiAuth from "../services/apiAuth";
import { Link, useNavigate } from "react-router-dom"; 

export default function TutorPage() {
  const [catData, setCatData] = useState([]); 

  const handleToggleCatStatus = (catId) => {
    setCatData(prevCatData => prevCatData.map(cat => {
      if (cat.id === catId) {
        return {
          ...cat,
          isActive: !cat.isActive
        };
      }
      return cat;
    }));
  };

  useEffect(()=>{


    apiAuth.getTutor()
    .then(res=>{
      console.log(res)
      setCatData(res.data)
    })
    .catch(err=>{
      console.log(err.response)
  
    })
    
  
  
  }, [])
  

  return (
    <PageContainer>
      <CardConteiner>
        {catData.map((cat )=> (
          <CatInfoCard key={cat.id}>
            <CatImage src={cat.url} alt={cat.nome_gatinho} />
            <CatName>{cat.nome_gatinho}</CatName>
            <CatCharacteristics>{cat.caracteristica}</CatCharacteristics>
            <TutorInfo>
            <TutorNome>{cat.nome_tutor}</TutorNome>
              <TutorContact>{cat.telefone_contato}</TutorContact>
              <TutorValor>{cat.valor}</TutorValor>
            </TutorInfo>
            <ToggleStatusButton isActive={cat.isActive} onClick={() => handleToggleCatStatus(cat.id)}>
              {cat.isActive ? 'Desativar Gatinho' : 'Ativar Gatinho'}
            </ToggleStatusButton>
          </CatInfoCard>
        ))}
      </CardConteiner>
      <BottomGif>
        <img src="https://i.pinimg.com/originals/48/5e/83/485e83ad5709e90ba5a0cffccb717e08.gif" alt="Gatinho correndo" />
      </BottomGif>
      <BackButton to="/home">Voltar para o Home</BackButton>

    </PageContainer>
  );
}

const PageContainer = styled.div`
   display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh;
`;

const CardConteiner = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
gap:5px;
padding: 5px;
    
`

const CatInfoCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
`;

const CatImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const CatName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CatCharacteristics = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const TutorInfo = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const TutorValor = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const TutorContact = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const TutorNome = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;


const ToggleStatusButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? '#ebd9f5' : '#6c549e')};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#ebd9f5' : '#5c468a')};
  }
`;
const BottomGif = styled.div`
  display: flex;
  margin-top: 20px;

  img {
    max-width: 100px; 
    height: auto;
  }
`;
const BackButton = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
  background-color: #6c549e;
  color: #fff;
  border: solid;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    color: #5c468a;
  }
`;

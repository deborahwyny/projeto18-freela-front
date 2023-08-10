import React, { useState } from 'react';
import styled from 'styled-components';

export default function TutorPage() {
  const [catData, setCatData] = useState({
    name: 'Whiskers',
    characteristics: 'Fluffy and playful',
    tutorName: 'John Doe',
    contactPhone: '123-456-7890',
    contactEmail: 'johndoe@example.com',
    isActive: true,
    catImage: 'https://via.placeholder.com/150', // URL da imagem do gatinho
    tutorImage: 'https://via.placeholder.com/150', // URL da imagem do tutor
  });

  const handleToggleCatStatus = () => {
    setCatData({
      ...catData,
      isActive: !catData.isActive,
    });
  };

  return (
    <PageContainer>
      <TutorConteiner>
        <TutorCard>
          <TutorImage src={catData.tutorImage} alt={`Foto de ${catData.tutorName}`} />
          <TutorName>{catData.tutorName}</TutorName>
        </TutorCard>
      </TutorConteiner>
      <CardConteiner>
      <CatInfoCard>
        <CatImage src={catData.catImage} alt={catData.name} />
        <CatName>{catData.name}</CatName>
        <CatCharacteristics>{catData.characteristics}</CatCharacteristics>
        <TutorInfo>
          <TutorContact>{catData.contactPhone}</TutorContact>
          <TutorEmail>{catData.contactEmail}</TutorEmail>
        </TutorInfo>
        <ToggleStatusButton isActive={catData.isActive} onClick={handleToggleCatStatus}>
          {catData.isActive ? 'Desativar Gatinho' : 'Ativar Gatinho'}
        </ToggleStatusButton>
      </CatInfoCard>
      </CardConteiner>
      <BottomGif>
  <img src="https://i.pinimg.com/originals/48/5e/83/485e83ad5709e90ba5a0cffccb717e08.gif" alt="Gatinho correndo" />
</BottomGif>

    </PageContainer>
  );
}

const PageContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh; */
`;

const TutorConteiner = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 8px;
`;

const TutorCard = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
`;

const TutorImage = styled.img`
  width: 54%;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const TutorName = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;


const CardConteiner = styled.div`

display: flex;
justify-content: center;
    
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

const TutorContact = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const TutorEmail = styled.p`
  font-size: 14px;
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
  justify-content: center;
  margin-top: 20px;

  img {
    max-width: 100px; /* Ajuste o tamanho conforme necessário */
    height: auto;
  }
`;


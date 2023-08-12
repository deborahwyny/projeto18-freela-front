import React, { useState } from 'react';
import styled from 'styled-components';
import NomeLogo from "../assets/nomeLogo.png";
import apiAuth from "../services/apiAuth";
import { useEffect } from 'react';


export default function Home() {
  const [expandedCat, setExpandedCat] = useState(null);
  const [fotosGatinhos, setfotosGatinhos] = useState([]);

  const expandCat = (catId) => {
    if (expandedCat === catId) {
      setExpandedCat(null);
    } else {
      setExpandedCat(catId);
    }
  }

  useEffect(()=>{


  apiAuth.gatinhosHome()
  .then(res=>{
    console.log(res)
    setfotosGatinhos(res.data)
  })
  .catch(err=>{
    console.log(err.response)

  })
  


}, [])


  return (
    <div>
      <Navbar>
        <Logo src={NomeLogo} alt="Miaudelos Logo" />
        <NavItems>
          <NavItem>
            <NavItemLink href="/">Home</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="/tutor">Tutor</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="/cats">Cats</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="/cadastre">Cadastre</NavItemLink>
          </NavItem>
        </NavItems>
      </Navbar>
      <Container>
        <CardContainer>
          {fotosGatinhos.map((cat) => (
            <Card key={cat.id} onClick={() => expandCat(cat.id)} expanded={expandedCat === cat.id}>
              <CardImage url={cat.url}  />
              <CardName>{cat.nome_gatinho}</CardName>
              <CardContact>Telefone: {cat.telefone_contato}</CardContact>

              {expandedCat === cat.id && (
                <CardDescription>{cat.caracteristica}</CardDescription>
              )}
            </Card>
          ))}
        </CardContainer>
      </Container>
    </div>
  );
}


const CardContact = styled.p`
  font-size: 12px;
  color: #555;
  margin-top: 5px;
`;
const Navbar = styled.nav`
  background-color: white;
  color: #8c7da4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
`;

const Logo = styled.img`
  max-width: 150px;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  font-size: 16px;
`;

const NavItemLink = styled.a`
  text-decoration: none;
  color: #8c7da4;
  transition: color 0.3s;

  &:hover {
    color: #6c549e;
  }
`;

const Container = styled.div`
  padding: 30px;
`;



const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;



const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  ${(props) =>
    props.expanded &&
    `
    transform: scale(1.1);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  `}
`;

const CardImage = styled.div`
  width: 100%;
  height: 150px;
  background-color: #ccc;
  border-radius: 5px;
  background-image: url(${props => props.url});
`;

const CardName = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
`;

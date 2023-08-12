import React, { useState } from 'react';
import styled from 'styled-components';
import NomeLogo from "../assets/nomeLogo.png";

export default function Home() {
  const [expandedCat, setExpandedCat] = useState(null);

  const cats = [
    { id: 1, name: 'Whiskers', image: 'placeholder-image-1.jpg', description: 'A fluffy and playful kitty.' },
    { id: 2, name: 'Mittens', image: 'placeholder-image-2.jpg', description: 'A graceful and elegant cat.' },
    { id: 3, name: 'Socks', image: 'placeholder-image-3.jpg', description: 'A mischievous and curious kitten.' },
  ];

  const expandCat = (catId) => {
    if (expandedCat === catId) {
      setExpandedCat(null);
    } else {
      setExpandedCat(catId);
    }
  };

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
          {cats.map((cat) => (
            <Card key={cat.id} onClick={() => expandCat(cat.id)} expanded={expandedCat === cat.id}>
              <CardImage />
              <CardName>{cat.name}</CardName>
              {expandedCat === cat.id && (
                <CardDescription>{cat.description}</CardDescription>
              )}
            </Card>
          ))}
        </CardContainer>
      </Container>
    </div>
  );
}

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
`;

const CardName = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
`;

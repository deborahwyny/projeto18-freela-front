import React from 'react';
import styled from 'styled-components';
import NomeLogo from "../assets/nomeLogo.png";

export default function Home() {
  return (
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
      </NavItems>
    </Navbar>
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

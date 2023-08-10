import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Container>
            <Nav>
                <Logo>My App</Logo>
                <NavList>
                    <li>Home</li>
                    <li>Tutor</li>
                    <li>cats</li>
                </NavList>
            </Nav>
            <Main>
                {/* Seu conteúdo principal aqui */}
            </Main>
        </Container>
    );
}

const Container = styled.div`
    * {
        margin: 0;
        padding: 0;
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #23232e;
    height: 8vh;
    position: fixed;
    width: 100%;
    z-index: 1;
`;

const Logo = styled.div`
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #fff;
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
`;

const Main = styled.main`
    /* background: url("bg.jpg") no-repeat center center; */
    background-size: cover;
    height: 92vh;
    padding-top: 8vh;
`;

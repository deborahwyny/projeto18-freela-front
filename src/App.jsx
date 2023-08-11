import styled from "styled-components"
import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import CadastreGatinho from "./pages/CadastreGatinho"
import TutorPage from "./pages/Tutor"


function App() {

  return (
  
   <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<Login />} /> */}
    {/* <Route path="/" element={<Cadastro/>} /> */}
    {/* <Route path="/" element={<Home />}/> */}
    {/* <Route path="/" element={<CadastreGatinho />} /> */}
    <Route path="/" element={<TutorPage />}/>
    </Routes>
    </BrowserRouter>

    
  )
}

export default App

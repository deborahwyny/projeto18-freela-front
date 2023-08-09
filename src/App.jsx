import styled from "styled-components"
import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"


function App() {

  return (
  
   <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<Login />} /> */}
    <Route path="" element={<Cadastro/>} />
    </Routes>
    </BrowserRouter>

    
  )
}

export default App

import styled from "styled-components"
import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"


function App() {

  return (
  
   <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<Login />} /> */}
    {/* <Route path="" element={<Cadastro/>} /> */}
    <Route path="" element={Home}/>
    </Routes>
    </BrowserRouter>

    
  )
}

export default App

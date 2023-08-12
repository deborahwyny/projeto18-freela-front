import styled from "styled-components"
import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import CadastreGatinho from "./pages/CadastreGatinho"
import TutorPage from "./pages/Tutor"
import { UserContext } from "./context/UserContext"



function App() {

  const [user, setUser] = useState(localStorage.getItem("sessionToken") || "");


  return (
  
   <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/cadastro" element={<Cadastro/>} />
    <Route path="/home" element={<Home />}/>
    <Route path="/cadastre" element={<CadastreGatinho />}  />
    <Route path="/tutor" element={<TutorPage />} />
    </Routes>
    </UserContext.Provider>
    </BrowserRouter>

    
  )
}

export default App

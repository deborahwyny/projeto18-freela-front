import axios from "axios";

const BASE_URL = "http://localhost:5000"


function login(body) {
    const promise = axios.post(`${BASE_URL}/login`, body);
    return promise;
}

function cadastro(body) {
    const promise = axios.post(`${BASE_URL}/cadastro`, body);
    return promise;
}

function cadastreGatinho(body) {
    const promise = axios.post(`${BASE_URL}/pets`, body);
    return promise;
}

function gatinhosHome(){
const promise = axios.get(`${BASE_URL}/pets`);
return promise;
}

const apiAuth = {login,cadastro, cadastreGatinho,gatinhosHome} 
export default apiAuth
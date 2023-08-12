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
function cadastreGatinho(body, token) {
    const instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    return instance.post('/pets', body);
  }


function gatinhosHome(){
const promise = axios.get(`${BASE_URL}/pets`);
return promise;
}

const apiAuth = {login,cadastro, cadastreGatinho,gatinhosHome} 
export default apiAuth
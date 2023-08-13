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


function getTutor(token){
    const promise = axios.get(`${BASE_URL}/pets`);
    const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    
      return instance.get('/pets');

}

const apiAuth = {login,cadastro, cadastreGatinho,gatinhosHome,getTutor} 
export default apiAuth
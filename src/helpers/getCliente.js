import axios from 'axios'

async function getClient(cEmail){
    const response = await axios.get(`http://localhost:8080/cliente/${cEmail}`);
    return response.data;
}
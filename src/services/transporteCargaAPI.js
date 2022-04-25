import axios from 'axios';

async function getAllVehicles(){
    const response = await axios.get(`http://localhost:8080/vehiculos`);
    return response.data;
}


export default {
    getAllVehicles
};
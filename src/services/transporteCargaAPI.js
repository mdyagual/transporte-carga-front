import axios from 'axios';

async function getAllVehicles(){
    const response = await axios.get(`http://localhost:8080/vehiculos`);
    return response.data;
}

async function postDriverInfo(info){
    const response = await axios.post(`http://localhost:8080/vehiculo`,info);
    return response.data.placa;
}

async function getDriverInfo(setCorreo){
    const response = await axios.get(`http://localhost:8080/conductor/correo/${setCorreo}`);
    return response.data;
}

export default {
    getAllVehicles,
    postDriverInfo,
    getDriverInfo
};
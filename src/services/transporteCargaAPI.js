import axios from 'axios';

async function getAllVehicles(){
    const response = await axios.get(`https://transporte-carga-back.herokuapp.com/vehiculos`);
    return response.data;
}

async function postDriverInfo(info){
    const response = await axios.post(`https://transporte-carga-back.herokuapp.com/vehiculo`,info);
    return response.data.placa;
}

async function getDriverInfo(setCorreo){
    const response = await axios.get(`https://transporte-carga-back.herokuapp.com/conductor/correo/${setCorreo}`);
    return response.data;
}

export default {
    getAllVehicles,
    postDriverInfo,
    getDriverInfo
};
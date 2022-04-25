import React, { useEffect } from 'react';
import Consult from '../components/Consulta/Consult';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVehiclesAction } from '../actions/actionsConsult';
import transporteCargaAPI from '../services/transporteCargaAPI';

const ConsultaPage = () =>{
    //---Carga de los vehículos disponibles
    const dispatch = useDispatch();

    const vehiculos = useSelector( (state) => state.consult.vehiculos);
    const getAllVehicles = async () => {
        try {
            const data = await transporteCargaAPI.getAllVehicles();  
            dispatch(getAllVehiclesAction(data));
        }catch (error){
            console.log(error);
        }
    };

    useEffect(() => {   
        getAllVehicles();
    },[]);

    return(
        <>
        <Consult vehiculos={vehiculos}/>
        </>
    )
}

export default ConsultaPage;
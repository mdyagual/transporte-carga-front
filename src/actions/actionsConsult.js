import * as actConsult from '../utils/actionConsultTypes';

export const getAllVehiclesAction = (vehiculos) => {
    return {
        type: actConsult.GET_ALL_VEHICLES,
        payload: vehiculos
    };
};

export const getInfoVehicleAction = (modelo) => {
    return {
        type: actConsult.GET_INFO_VEHICLE,
        payload: modelo
    }
}
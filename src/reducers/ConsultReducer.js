import * as actConsult from '../utils/actionConsultTypes';

const initialState = {
    vehiculos:[],
    selected: {}
};

export const ConsultReducer = (state = initialState, action) => {
    switch(action.type){
        case actConsult.GET_ALL_VEHICLES:  
            //console.log("Reducer: ",action.payload);
            const newV = [];
            action.payload.map((v) =>  newV.push({
                key: v.placa,
                text: v.marca,
                value: `Nombre: ${"ABCDEF"}\nPlaca: ${v.placa}\nCapacidad: ${v.capacidad}\nCelular: ${"NNNNNNNN"}`,
                
                }));
            return {...state, vehiculos:newV};

        /*case actConsult.GET_INFO_VEHICLE:
            const selVeh = state.selected[action.payload];*/
        default:
            return {...state};

    }
};


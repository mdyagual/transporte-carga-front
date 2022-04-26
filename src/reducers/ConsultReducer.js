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
                value: `Nombre: ${v.conductor.nombre}\nPlaca: ${v.placa}\nCapacidad: ${v.capacidad}\nTipo: ${v.tipo}\nCelular: ${v.conductor.celular}`,
                
                }));
            console.log(newV);
            return {...state, vehiculos:newV};
        default:
            return {...state};

    }
};


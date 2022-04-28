import * as actConsult from '../utils/actionRegisterTypes';

const initialState = {
    vehiculo : {},
    conductor : {}
};

export const RegisterReducer = (state = initialState, action) => {
    switch(action.type){
        case actConsult.POST_DRIVER_INFO:              
            return {...state, info: action.payload};
		case actConsult.GET_DRIVER_INFO:
            const resConductor = action.payload.conductor;
			return {vehiculo: action.payload, conductor: resConductor};
        default:
            return state;

    }
};

/*

const RegisterPage = () =>{
    const dispatch = useDispatch();

    const datos = useSelector( (state) => state.register.info);
    const getDriverInfo = async () => {
        try {
            const data = await transporteCargaAPI.getDriverInfo();  
            dispatch(getAllVehiclesAction(data));
        }catch (error){
            console.log(error);
        }
    };

    useEffect(() => {   
        getDriverInfo();
    },[]);

  
}

*/

/*
async function postDriverInfo(){
    const response = await axios.get(`http://localhost:8080/vehiculo`);
    return response.data;
}

async function getDriverInfo(){
    const response = await axios.get(`http://localhost:8080/conductor/correo/`, {params: { correo:setCorreo} });
    return response.data;
}


*/
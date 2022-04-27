import {ConsultReducer} from '../reducers/ConsultReducer';
import {RegisterReducer} from '../reducers/RegisterReducer';
import {combineReducers} from 'redux';
export const allReducers = combineReducers({
    consult: ConsultReducer,
    register: RegisterReducer
});
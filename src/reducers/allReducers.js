import {ConsultReducer} from '../reducers/ConsultReducer';
import {combineReducers} from 'redux';
export const allReducers = combineReducers({
    consult: ConsultReducer,
});
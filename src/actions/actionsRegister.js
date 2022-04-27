import * as actRegister from '../utils/actionRegisterTypes';

export const postDriverInfoAction = (data) => {
    return {
        type: actRegister.POST_DRIVER_INFO,
        payload: data
    };
};

export const getDriverInfoAction = (conductor) => {
    return {
        type: actRegister.GET_DRIVER_INFO,
        payload: conductor
    }
}
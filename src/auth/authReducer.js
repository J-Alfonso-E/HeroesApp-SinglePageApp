import { types } from '../types/types';

/*const state = {
    name: 'Poncho', 
    logged: true,
};*/

export const authReducer = (state = {}, action) => {
    //console.log(state);
    //console.log(action);
    //console.log(types.logout);
    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }
}
import { types } from '../types/types';

/*const state = {
    name: 'Poncho', 
    logged: true,
};*/

export const authReducer = (state = {}, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case types.login:
            console.log("Se ha asignado un usuario");
            return {
                ...action.payload, 
                logged: true
            }

            case types.logout:
                console.log("Ha cerrado session el usuario");
                return {
                    logged: false
                }

            default:
                console.log("Caso predeterminado");
                break;
    }
}
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe ('Pruebas sobre authReducer', () =>{
    test('Debe de retornar el estado predeterminado', () =>{
        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
    });

    test('debe de autenticar y colocar el nombre del usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Poncho'
            }
        }

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({logged: true, name: 'Poncho'});
    });

    test('debe de limpar los datos de usuario', () => {

        const action = {
            type: types.logout,
        }

        const state = authReducer({logged: true, name: 'Poncho'}, action);
        expect(state).toEqual({logged: false});
    });
})

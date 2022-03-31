import {mount} from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import {PrivateRoute} from '../../routers/PrivateRoute';

jest.mock('react-router-dom', () => ({ //Simulacion de la libreria de de react-router-dom
    ...jest.requireActual('react-router-dom'), //Importa la libreria de react sin cambios
    Navigate: () => <span>No Autenticado</span> //Despues de que se importo se sobreescribe el hook de Navigate
}));

Storage.prototype.setItem = jest.fn();


describe('Pruebas en PrivateRoute', ()=>{ 

    

    test('debe de mostrar el componenete si esta autenticado y tambien debe estar guardado en el localStorage', () => {

        const contextValue = {
            user: {
                logged: true, 
                name: 'Poncho'
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={["/"]} >
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.text().trim()).toBe('Private Component');
        expect(localStorage.setItem).toHaveBeenCalledWith('lastpath', '/');

    });

    test('Debe mostrar algo diferente cuando no esta autenticado', () => {

        const contextValue = {
            user: {
                logged: false
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={["/"]} >
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        
        expect(wrapper.text().trim()).toBe('No Autenticado');
        

    });

});

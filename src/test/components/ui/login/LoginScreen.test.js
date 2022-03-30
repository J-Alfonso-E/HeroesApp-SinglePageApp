import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../../auth/authContext';
import { LoginScreen } from "../../../../components/Login/loginScreen";
import { types } from '../../../../types/types';

const mockNavigate = jest.fn(); //Funcion de prueba de useNavigate, forzosamente se requiere que comience con "mock"

jest.mock('react-router-dom', () => ({ //Simulacion de la libreria de de react-router-dom
    ...jest.requireActual('react-router-dom'), //Importa la libreria de react sin cambios
    useNavigate: () => mockNavigate //Despues de que se importo se sobreescribe el hook de useNavigate
}));

describe('Pruebas en Login', () => {
    test("Snapshot del componente", () => {

        const contextValue = { user: { logged: false } }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <LoginScreen />
                </MemoryRouter>
            </AuthContext.Provider>


        );

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de realizar el dispatch y la navegacion', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Poncho'
            }
        }


        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <LoginScreen />
                </MemoryRouter>
            </AuthContext.Provider>


        );

        wrapper.find('button').simulate('click');
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            payload:
                { name: 'Poncho' },
            'type': types.login
        }
        ); //Verificamos que se haya llamado con el siguiente objeto
        expect(mockNavigate).toHaveBeenCalledWith('/', {replace: true}); //Verificamos que se haya llamado el hook de navegacion a una ruta especificada

        localStorage.setItem('lastpath', '/dc'); //guaramos algo en el localStorage simulando la ultima pagina visitada

        wrapper.find('button').simulate('click'); //Hacemos click en el boton de iniciar session

        expect(mockNavigate).toHaveBeenCalledWith('/dc', {replace: true}); //Verificamos que el hook de navegacion dirija al usuario a dicha pagina guardada en el localStorage

    })
});
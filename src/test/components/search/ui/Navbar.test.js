import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../../auth/authContext';
import { Navbar } from '../../../../components/ui/Navbar';
import { types } from '../../../../types/types';

const mockNavigate = jest.fn(); //Funcion de prueba de useNavigate, forzosamente se requiere que comience con "mock"

jest.mock('react-router-dom', () => ({ //Simulacion de la libreria de de react-router-dom
    ...jest.requireActual('react-router-dom'), //Importa la libreria de react sin cambios
    useNavigate: () => mockNavigate //Despues de que se importo se sobreescribe el hook de useNavigate
}));

describe('Pruebas en el Navbar', () => {
    test('Snapshot y ver nombre del usuario', () => {
        //Mandar el usuario de Pedros 
        //Verificar el snapshot
        //Revisar que exista la leyenda del usuario autenticado

        const usuario = {
            user: {
                logged: true,
                name: 'Poncho'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={usuario} >
                <MemoryRouter >
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Poncho');

    });

    test('debe de llamar el logout, el navigate y el dispatch con los argumentos', () => {

        const usuario = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Poncho'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={usuario} >
                <MemoryRouter >
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const BtnLogout = wrapper.find('.btn').simulate('click');

        expect(usuario.dispatch).toHaveBeenCalledWith({'types': types.logout});
        expect(mockNavigate).toHaveBeenCalledWith('/login', {replace: true});
        

    });
});
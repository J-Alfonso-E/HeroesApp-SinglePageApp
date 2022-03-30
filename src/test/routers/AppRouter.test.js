import { AppRouter } from '../../routers/AppRouter';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';

describe('Pruebas en AppRouter', () => {

    test('Debe de mostrar el Login si no esta autenticado', () => {
        const ContextValue = {
            user: {
                logged: false
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={ContextValue} >
                <AppRouter />
            </AuthContext.Provider>

        );

        expect (wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('LoginScreen');

    });

    test('Debe de la pagina principal depues de autenticarse', () => {
        const ContextValue = {
            user: {
                logged: true, 
                name: 'Poncho'
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={ContextValue} >
                <AppRouter />
            </AuthContext.Provider>

        );

        expect (wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);
        

    });
});
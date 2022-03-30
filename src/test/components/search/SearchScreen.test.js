import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SeachScreen';

const mockNavigate = jest.fn(); //Funcion de prueba de useNavigate, forzosamente se requiere que comience con "mock"

jest.mock('react-router-dom', () => ({ //Simulacion de la libreria de de react-router-dom
    ...jest.requireActual('react-router-dom'), //Importa la libreria de react sin cambios
    useNavigate: () => mockNavigate //Despues de que se importo se sobreescribe el hook de useNavigate
}));


describe("Pruebas con el SearchScreen", () => {
    

    test('Snapshot vacio', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/seach']} >
                <SearchScreen />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un heroe');
    });

    test('debe de mostrar la imagen de Batman y el campo de busqueda con batman', () => { 
        const wrapper = mount(
            <MemoryRouter initialEntries={['/seach?q=batman']} >
                <SearchScreen />
            </MemoryRouter>
        );
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe de mostrar una etiqueta de que no encontro el heroe', () => { 
        const wrapper = mount(
            <MemoryRouter initialEntries={['/seach?q=batman123']} >
                <SearchScreen />
            </MemoryRouter>
        );
        expect(wrapper.find('.alert-danger').text().trim()).toBe('No se ha encontrado coincidencias con la busqueda: batman123');
        expect(wrapper.find('input').prop('value')).toBe('batman123');
        
        
    });
});

import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HeroesScreen } from '../../../components/Heroes/HeroesScreen';


const mockNavigate = jest.fn(); //Funcion de prueba de useNavigate, forzosamente se requiere que comience con "mock"

jest.mock('react-router-dom', () => ({ //Simulacion de la libreria de de react-router-dom
    ...jest.requireActual('react-router-dom'), //Importa la libreria de react sin cambios
    useNavigate: () => mockNavigate //Despues de que se importo se sobreescribe el hook de useNavigate
}));


describe('Pruebas en heroScreen', () => {

    test("No debe de mostrar el HeroScreen si no hay un heroe en la URL", () => {
        const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']} >
        <Routes>
            <Route path="/hero" element={<HeroesScreen />} />
            <Route path="/" element={<h1>Sin Contenido</h1>} />
        </Routes>
    </MemoryRouter>
    );
        

        expect(wrapper.find('h1').text().trim()).toBe('Sin Contenido');
    });

    test("Debe de mostrar un heroe", () => {
        const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/marvel-captain']} >
        <Routes>
            <Route path="/hero/:HeroId" element={<HeroesScreen />} />
            <Route path="/" element={<h1>Sin Contenido</h1>} />
        </Routes>
    </MemoryRouter>
    );
        
            expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test("Verificando que regrese a la pantalla anterior", () => {
        const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/marvel-captain']} >
        <Routes>
            <Route path="/hero/:HeroId" element={<HeroesScreen />} />
            
        </Routes>
    </MemoryRouter>
    );
        
        wrapper.find('button').simulate('click');
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });


    test("No debe de mostrar el HeroScreen si la ruta esta mal", () => {
        const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/dfcasca']} >
        <Routes>
            <Route path="/hero/:HeroId" element={<HeroesScreen />} />
            <Route path="/" element={<h1>Sin Contenido</h1>} />
        </Routes>
    </MemoryRouter>
    );
        

        expect(wrapper.find('h1').text().trim()).toBe('Sin Contenido');
    });
});
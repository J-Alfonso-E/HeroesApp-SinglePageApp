import { Routes, Route } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SeachScreen";
import { DCScreen } from "../components/dc/DCScreen";
import { Navbar } from "../components/ui/Navbar";
import { HeroesScreen } from "../components/Heroes/HeroesScreen";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>

                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DCScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    {/* Ruta para pantalla de Heroe*/}
                    <Route path="hero/:HeroId" element={<HeroesScreen />} /> {/* Los 2 puntos y un nombre sive para decir que es una varable y se puede tener la informacion en donde se renderiza*/}
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    )
}
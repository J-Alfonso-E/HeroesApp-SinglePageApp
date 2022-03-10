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
            <Routes>
                
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DCScreen />} />
                <Route path="search" element={<SearchScreen />} />
                {/* Ruta para pantalla de Heroe*/}
                <Route path="heroes" element={<HeroesScreen />} />
                <Route path="/" element={<MarvelScreen />} />
            </Routes>
        </>
    )
}
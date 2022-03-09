import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { DCScreen } from "../components/dc/DCScreen";
import { LoginScreen } from "../components/Login/loginScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SeachScreen";
import { Navbar } from "../components/ui/Navbar";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MarvelScreen />} />
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DCScreen />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path="/login" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    );
}
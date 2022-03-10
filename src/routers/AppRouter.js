import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/Login/loginScreen";

import { DashboardRoutes } from "./DashboardRoutes";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>
    );
}
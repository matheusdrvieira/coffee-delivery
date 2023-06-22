import { Routes, Route } from "react-router-dom";
import { Home } from "../screens/home";

export function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}
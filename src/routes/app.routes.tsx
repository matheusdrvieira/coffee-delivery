import { Routes, Route } from "react-router-dom";
import { Home } from "../screens/home";
import { FormAddress } from "../screens/formAddress";

export function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/address" element={< FormAddress />} />
        </Routes>
    )
}
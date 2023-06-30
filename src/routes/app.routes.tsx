import { Routes, Route } from "react-router-dom";
import { Home } from "../screens/home";
import { FormAddress } from "../screens/formAddress";
import { FinishedOrder } from "../screens/finishedOrder";

export function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/address" element={< FormAddress />} />
            <Route path="/order" element={< FinishedOrder />} />
        </Routes>
    )
}
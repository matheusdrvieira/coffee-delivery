import { Routes, Route } from "react-router-dom";
import { Home } from "../screens/home";
import { Order } from "../screens/order";
import { FinishedOrder } from "../screens/finishedOrder";

export function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={< Order />} />
            <Route path="/finishedOrder" element={< FinishedOrder />} />
        </Routes>
    )
}
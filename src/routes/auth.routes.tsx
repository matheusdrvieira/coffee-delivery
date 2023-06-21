import { Routes, Route } from "react-router-dom";

import { SignIn } from "../screens/signIn";
import { SignUp } from "../screens/signUp";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
        </Routes>
    )
}
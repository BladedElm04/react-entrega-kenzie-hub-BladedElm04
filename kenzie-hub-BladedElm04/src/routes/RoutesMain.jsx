import { Route, Routes, useNavigate } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DashBoard } from "../pages/DashBoard"
import { LoginForm } from "../components/forms/LoginForm"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const RoutesMain = () => {


    return (
        <Routes>
            <Route path="/" element={<LoginPage />}>
                <Route index element={<LoginForm />} />
            </Route>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<DashBoard />} />
            </Route>
        </Routes>
    )
}
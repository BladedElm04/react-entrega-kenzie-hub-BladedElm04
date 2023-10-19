import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../providers/UserContext"
import { useContext } from "react"

export const ProtectedRoutes = () => {
    const { user } = useContext(UserContext)

    return user ? <Outlet /> : <Navigate to="/" />
}
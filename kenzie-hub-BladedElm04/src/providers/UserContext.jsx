import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState()
    
    const userRegister = async (formData, setLoading, navigate) => {
        try {
            setLoading(true)
            await api.post("/users", formData)
            
        } catch (error) {
            toast.error("Usuario já cadastrado", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        } finally {
            setLoading(false)
            navigate("/")
            toast.success("Conta criada com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }

    const userLogin = async (formData, navigate) => {
        try {
            const { data } = await api.post("/sessions", formData)
            localStorage.setItem("@token", data.token)
            setUser(data.user)
            navigate("/dashboard")
        } catch (error) {
            toast.error("Email ou senha inválidos", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }
    
    const logOut = (navigate) => {
        setUser("")
        localStorage.removeItem("@token")
        navigate("/")
    }

    return (
        <UserContext.Provider value={{user, setUser, userRegister, userLogin, logOut}}>
            {children}
        </UserContext.Provider>
    )
}
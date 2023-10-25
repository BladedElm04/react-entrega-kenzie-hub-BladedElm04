import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)

    const [techList, setTechList] = useState([])

    const [loadingPage, setLoadingPage] = useState(false)
    
    const navigate = useNavigate()
    
    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@token")
            
            if (token) {
                try {
                    setLoadingPage(true)
                    const { data } = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(data)
                    navigate("/dashboard")
                } catch (error) {
                    toast.error("Faça login novamente")
                    localStorage.removeItem("@token")
                } finally {
                    setLoadingPage(false)
                }
            }
        }
        loadUser()
    }, [])
    
    const userRegister = async (formData, setLoading) => {
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

    const userLogin = async (formData) => {
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

    const logOut = () => {
        localStorage.removeItem("@token")
        localStorage.removeItem("@userId")
        setUser(null)
        navigate("/")
    }

    return (
        <UserContext.Provider value={{ user, setUser, userRegister, userLogin, logOut, loadingPage, techList, setTechList }}>
            {children}
        </UserContext.Provider>
    )
}
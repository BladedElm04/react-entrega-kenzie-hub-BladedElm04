import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({})

export const TechProvider = ({children}) => {

    const {techList, setTechList} = useContext(UserContext)

    const [editingTech, setEditingTech] = useState(null)

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const getTechs = async () => {
            const token = localStorage.getItem("@token")
            try {
                const { data } = await api.get("/profile", {
                   headers: {
                       Authorization: `Bearer ${token}`
                   } 
                })
                console.log(data.techs)
                setTechList(data.techs)
            } catch (error) {
                console.log(error)
            }
        }
        getTechs()
    }, [])


    const createTech = async (formData) => {
        console.log(formData)
        const token = localStorage.getItem("@token")
        try {
            const { data } = await api.post("/users/techs", formData, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList([...techList, data])
        } catch (error) {
            console.log(error)
        } finally {
            setIsVisible(false)
        }
    }

    const deleteTech = async (id) => {
        const token = localStorage.getItem("@token")
        try {
            await api.delete(`/users/techs/${id}`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            const newTechList = techList.filter((tech) => tech.id !== id)
            setTechList(newTechList)
        } catch (error) {
            console.log(error)
        } 
    }

    const updateTech = async (formData) =>{
        try {
            const token = localStorage.getItem("@token")
            const { data } = await api.put(`/users/techs/${editingTech.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newTechList = techList.map(tech => {
                if(tech.id === editingTech.id){
                    return data
                } else {
                    return tech
                }
            })

            setTechList(newTechList)
        } catch (error) {
            console.log(error)
        } finally {
            setEditingTech(null)
        }
    }
    return (
        <TechContext.Provider value={{ createTech, isVisible, setIsVisible, techList, deleteTech, setEditingTech, editingTech, updateTech }}>
            {children}
        </TechContext.Provider>
    )
}
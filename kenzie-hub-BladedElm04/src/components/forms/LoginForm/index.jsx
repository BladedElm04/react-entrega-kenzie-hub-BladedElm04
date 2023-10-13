import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { loginFormSchema } from "./loginFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../../services/api"
import styles from "./style.module.scss"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

export const LoginForm = ({ setUser }) => {
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const [isHidden, setIsHidden] = useState(true)

    const navigate = useNavigate()

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

    const submit = (formData) => {
        userLogin(formData)
    }
    
    return (
        <>
            <div className={styles.form__container}>
                <h2 className="title one">Login</h2>
                <form onSubmit={handleSubmit(submit)}>
                    <Input 
                        label="E-mail" 
                        type="email" 
                        placeholder="Digite aqui seu e-mail" 
                        {...register("email")} 
                        error={errors.email} 
                    />
                    <Input 
                        label="Senha" 
                        type={isHidden ? "password" : "text"}
                        placeholder="Digite aqui sua senha" 
                        {...register("password")} 
                        error={errors.password}
                    />
                    <button className="btn title two" type="submit">Entrar</button>
                </form>
                <button className={styles.eye__button} onClick={() => setIsHidden(!isHidden)}>
                        {isHidden ? <MdVisibility size={11}/> : <MdVisibilityOff size={11} />}
                </button>
                <div className={styles.span__container}>
                    <span className="headline">Ainda não possui uma conta?</span>
                    <Link className={styles.to_register__button} to="/register" >Cadastrar-se</Link>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark" />
            </div>
        </>
    )
}
import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { registerFormSchema } from "./registerFormSchema.js"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useState } from "react"
import "react-toastify/dist/ReactToastify.css"
import styles from "./style.module.scss"
import { UserContext } from "../../../providers/UserContext"

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema)
    })
    const { userRegister } = useContext(UserContext)

    const [loading, setLoading] = useState(false)

    const submit = (formData) => {
        userRegister(formData, setLoading)
    }

    return (
        <>
            <div className={styles.form__container}>
                <h1 className="title one">Crie sua conta</h1>
                <span className="headline">Rapido e grátis, vamos nessa</span>
                <form onSubmit={handleSubmit(submit)}>
                    <Input
                        label="Nome"
                        placeholder="Digite aqui seu nome"
                        type="text"
                        {...register("name")}
                        error={errors.name}
                    />
                    <Input
                        label="Email"
                        placeholder="Digite aqui seu email"
                        type="email"
                        {...register("email")}
                        error={errors.email}
                    />
                    <Input
                        label="Senha"
                        placeholder="Digite aqui sua senha"
                        type="password"
                        {...register("password")}
                        error={errors.password}
                    />
                    <Input
                        label="Confirmar Senha"
                        placeholder="Digite novamente sua senha"
                        type="password"
                        {...register("confirmPassword")}
                        error={errors.confirmPassword}
                    />
                    <Input
                        label="Bio"
                        placeholder="Fale sobre você"
                        type="text"
                        {...register("bio")}
                        error={errors.bio}
                    />
                    <Input
                        label="Contato"
                        placeholder="Opção de contato"
                        type="text"
                        {...register("contact")}
                        error={errors.contact}
                    />
                    <div className={styles.select__container}>
                        <div>
                            <label className="headline" htmlFor="select">Selecionar módulo</label>
                            <select name="course_module" id="select" {...register("course_module")}>
                                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                                <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                                <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn negative title two" type="submit" disabled={loading}>Cadastrar</button>
                </form>
            </div>
        </>
    )
}
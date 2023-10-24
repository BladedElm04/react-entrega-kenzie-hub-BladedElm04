import { useForm } from "react-hook-form"
import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"
import { Input } from "../../forms/Input"
import styles from "./style.module.scss"
export const EditTechModal = () => {

    const { editingTech, setEditingTech, updateTech } = useContext(TechContext)

    const {register, handleSubmit} = useForm({
        values:{
            title: editingTech.title,
            status: editingTech.ststus,
        }
    })

    const submit = (formData) => {
        updateTech(formData)
    }
    
    return (
        <div className={styles.modal__overlay} role="dialog">
        <div className={styles.modal__container}>
            <div className={styles.title__container}>
                <h2 className="headline">Tecnologia Detalhes</h2>
                <button className={styles.x__button} onClick={() => setEditingTech(null)}>X</button>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <Input label="Nome" type="text" placeholder="Digite a tecnologia" {...register("title")}/>

                <div className={styles.select__container}>
                    <div>
                        <label className="headline" htmlFor="select">Selecionar status</label>

                        <select name="status" id="select" {...register("status")} >
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className="btn title two">Salvar alterações</button>
            </form>
        </div>
    </div>
    )
}
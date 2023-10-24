import { HiOutlinePencil } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import styles from "./style.module.scss"
export const TechCard = ({ tech, deleteTech, setEditingTech }) => {

    return (
        <li className={styles.card__container}>
            <div className={styles.title__container}>
                <p className="title two">{tech.title}</p>
            </div>
            <div className={styles.status__container}>
                <span className="headline">{tech.status}</span>
                <div className={styles.buttons__container}>
                    <button onClick={() => setEditingTech(tech)}><HiOutlinePencil size={18} /></button>
                    <button onClick={() => deleteTech(tech.id)}><RiDeleteBin6Line size={18} /></button>
                </div>
            </div>
        </li>
    )
}
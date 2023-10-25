import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { TechCard } from "./TechCard"
import styles from "./style.module.scss"

export const TechList = () => {

    const { setIsVisible, techList , deleteTech, setEditingTech} = useContext(TechContext)


    console.log(techList)
    return (
        <>
            <div className={styles.title__container}>
                <h2 className="title two">Tecnologias</h2>
                <button onClick={() => setIsVisible(true)}>+</button>
            </div>

            <ul className={styles.list__container}>
                {
                   techList.length === 0 ? <p className={`headline ${styles.tech__paragraph}`}>Adicione uma tecnologia...</p> : techList.map((tech) => <TechCard key={crypto.randomUUID()} tech={tech} deleteTech={deleteTech} setEditingTech={setEditingTech} />)
                }
            </ul>
        </>
    )
}
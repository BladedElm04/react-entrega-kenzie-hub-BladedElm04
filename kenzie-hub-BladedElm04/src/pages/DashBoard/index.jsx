import { useContext, useState } from "react"
import { DefaultTemplate } from "../../components/DefaultTemplate"
import { Header } from "../../components/Header"
import styles from "./style.module.scss"
import { UserContext } from "../../providers/UserContext"
import { TechList } from "../../components/TechList"
import { CreateTechModal } from "../../components/modal/CreateTechModal"
import { TechContext } from "../../providers/TechContext"
import { EditTechModal } from "../../components/modal/EditTechModal"

export const DashBoard = () => {

    const { user, setUser } = useContext(UserContext)

    const { isVisible, editingTech } = useContext(TechContext)

    return (
        <>
            <Header setUser={setUser} className={styles.header__container} />
            <DefaultTemplate>
                <section className={styles.user__container}>
                    <div className={styles.user__info}>
                        <h2 className="title one">Olá, {user?.name}</h2>
                        <p className="headline">{user?.course_module}</p>
                    </div>
                </section>
                <section className={styles.content__section}>
                    <TechList />
                </section>
            </DefaultTemplate>
            {isVisible ? <CreateTechModal /> : null}
            {editingTech ? <EditTechModal/> : null}
            
        </>
    )
}
import { DefaultTemplate } from "../../components/DefaultTemplate"
import { Header } from "../../components/Header"
import styles from "./style.module.scss"

export const DashBoard = ({ user, setUser }) => {
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
                    <h2 className="title one">Que pena! Estamos em desenvolvimento :( </h2>
                    <p className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </section>
            </DefaultTemplate>
            
        </>
    )
}
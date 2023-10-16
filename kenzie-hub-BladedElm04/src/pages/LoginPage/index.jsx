import { LoginForm } from "../../components/forms/LoginForm"
import Logo from "../../assets/logo.svg"
import styles from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const LoginPage = () => {

    const { setUser } = useContext(UserContext)

    return (
        <>
            <figure className={styles.logo__container}>
                <img src={Logo} alt="logo" />
            </figure>
            <LoginForm setUser={setUser} />
        </>
    )
}
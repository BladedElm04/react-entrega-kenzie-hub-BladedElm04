import { LoginForm } from "../../components/forms/LoginForm"
import Logo from "../../assets/logo.svg"
import styles from "./style.module.scss"

export const LoginPage = ({ setUser }) => {
    return (
        <>
            <figure className={styles.logo__container}>
                <img src={Logo} alt="logo" />
            </figure>
            <LoginForm setUser={setUser} />
        </>
    )
}
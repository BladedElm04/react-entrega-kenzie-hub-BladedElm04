import { LoginForm } from "../../components/forms/LoginForm"
import Logo from "../../assets/logo.svg"
import styles from "./style.module.scss"
import { Outlet, useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <figure className={styles.logo__container}>
                <img src={Logo} alt="logo" />
            </figure>
            <Outlet />
        </>
    )
}
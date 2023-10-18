import Logo from "../../assets/logo.svg"
import styles from "./style.module.scss"
import { Outlet } from "react-router-dom"

export const LoginPage = () => {


    return (
        <>
            <figure className={styles.logo__container}>
                <img src={Logo} alt="logo" />
            </figure>
            <Outlet />
        </>
    )
}
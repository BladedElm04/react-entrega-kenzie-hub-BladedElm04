import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import styles from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const Header = () => {

    const { logOut } = useContext(UserContext)

    return (
        <header className={styles.header__container}>
            <img src={Logo} alt="logo" />
            <button className="btn medium" onClick={() => logOut()}>Sair</button>
        </header>
    )
}
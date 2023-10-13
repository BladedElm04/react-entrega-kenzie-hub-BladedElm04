import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import styles from "./style.module.scss"

export const Header = ({ setUser }) => {

    const navigate = useNavigate()

    const logOut = () => {
        setUser("")
        localStorage.removeItem("@token")
        navigate("/")
    }

    return (
        <header className={styles.header__container}>
            <img src={Logo} alt="logo" />
            <button className="btn medium" onClick={() => logOut()}>Sair</button>
        </header>
    )
}
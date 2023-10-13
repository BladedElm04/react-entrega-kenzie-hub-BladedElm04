import { RegisterForm } from "../../components/forms/RegisterForm"
import Logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import styles from "./style.module.scss"

export const RegisterPage = () => {

    return (
        <>
            <div className={styles.logo__container}>
                <img src={Logo} alt="" />
                <button className="btn medium"><Link className={`${styles.toLogin__button} headline bold`} to="/">Voltar</Link></button>
            </div>
            <RegisterForm />
        </>
    )
}
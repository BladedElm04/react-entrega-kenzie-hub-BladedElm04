import LoadingIcon from "../../assets/LoadingIcon.svg"
import styles from "./style.module.scss"
export const Loading = () => {
    return (

        <div className={styles.loading}>
            <img src={LoadingIcon} alt="Loading icon" />
        </div>
    )
}
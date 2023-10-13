import { forwardRef } from "react"
import styles from "./style.module.scss"


export const Input = forwardRef(({ error , label , ...rest }, ref ) => {
    return (
       <div className={styles.input__container}>
            <label className="headline">
                {label}
                <input ref={ref} {...rest} />
                {error ? <span>{error?.message}</span> : null}
                
            </label>
       </div>
    )
})
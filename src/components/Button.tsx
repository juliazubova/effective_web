import styles from './button.module.css'

const Button = (args: {text: string}) => {
    return <>
        <div style={{padding: "48px 0px 0px 0px"}}>
            <a href={''} className={styles.button}>
                {args.text}
            </a>
        </div>
    </>
}

export default Button;
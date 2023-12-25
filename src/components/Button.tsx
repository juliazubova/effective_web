import styles from './button.module.css'

const Button = (args: {text: string, isPrimaryColor: boolean, padding: string}) => {
    return <>
        <div style={{padding:  args.padding}}>
            <a href={''} className={`${styles.button} ${args.isPrimaryColor ? styles.primary : styles.secondary}`}>
                {args.text}
            </a>
        </div>
    </>
}

export default Button;
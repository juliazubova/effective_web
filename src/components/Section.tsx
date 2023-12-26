import styles from './section.module.css';
import { ReactElement } from "react";

const Section = (args: {title: string, description: string, image: string, button: ReactElement, isReverse: boolean, hasDivider: boolean}) => {
    const text_column = <>
        <div className={styles.text_column}>
            <div className={styles.section_title}>
                {args.title}
            </div>
            {args.hasDivider ? <hr/> : ''}
            <div className={styles.section_description}>
                {args.description}
            </div>
            {args.button}
        </div>
    </>
    const image = <>
        <div className={styles.section_image}>
            <img alt='image' src={args.image}/>
        </div>
    </>

    return <>
        <section className={styles.section}>
            {args.isReverse 
                ? <>{image} {text_column}</> 
                : <>{text_column} {image}</>}
        </section>
    </>
}

export default Section;
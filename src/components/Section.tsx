import styles from './section.module.css';
import { ReactElement } from "react";

const Section = (args: {title: string, description: string, image: string, button: ReactElement}) => {
    const text_column = <>
        <div className={styles.section_title}>
            <div className={styles.tile_title}>
                {args.title}
            </div>
            <div className={styles.tile_descripption}>
                {args.description}
            </div>
            {args.button}
        </div>
    </>
    const image = <>
        <div className={styles.block_image}>
            <img alt='image' src={args.image}/>
        </div>
    </>

    return <>
        <section className={styles.section}>
            {text_column} 
            {image}
        </section>
    </>
}

export default Section;
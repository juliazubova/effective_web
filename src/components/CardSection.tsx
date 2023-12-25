import style from './card_section.module.css'
import { ReactElement } from "react";
import Card from './Card'
import CardItem from '../models/CardItem'

const CardSection = (args: {title: string, description: string, button: ReactElement, items: CardItem[]}) => {
    const cards = args.items.map((item, index) => {
        return <Card 
            key={`card_${index}`}
            image={item.image}
            title={item.title}
            description={item.description}
        />
    })
    return <>
        <section className={style.cardSection}>
            <div className={style.cardSection_title}>
                {args.title}
            </div>
            <hr/>
            <div className={style.cardSection_description}>
                {args.description}
            </div>
            <div className={style.cardSection_cards}>
                {cards}
            </div>
            {args.button}
        </section>
    </>
}

export default CardSection;
import style from './card.module.css'
import CardItem from '../models/CardItem'

const Card = (args: CardItem) => {
    return <>
        <div className={style.card}>
            <div className={style.card_image}>
                <img alt={args.title} src={args.image}/>
            </div>
            <div className={style.card_content}>
                <div className={style.card_title}>
                    {args.title}
                </div>
                {args.description}
            </div>
        </div>
    </>
}

export default Card;
import styles from './card.module.scss'
import cards, { Card } from './card-data'

export default () => {
    return(
        <div className={styles.container}>
            {cards.map((card: Card) => (
                <div key={card.index} className={styles.card}>
                    <div className={styles.title}>
                        <img src={card.imgUrl} alt={card.title} />
                        <div className={styles.description}>
                            <h4>{card.title}</h4>
                            <p>{card.paragraph}</p>
                        </div>
                    </div>
                    <button>{card.price}</button>
                </div>
            ))}
        </div>
    )
}
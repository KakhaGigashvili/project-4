import styles from './styles.module.scss'

export default () => {
    return(
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src="/food/Foody Zone.svg" alt="food zone" />
                    <input className={styles.search} placeholder='Search Food....' type="search" />
                </div>
            </div>
                <div className={styles.section}>
                    <button>All</button>
                    <button>Breakfast</button>
                    <button>Lunch</button>
                    <button>Dinner</button>
                </div>
        </div>
    )
}
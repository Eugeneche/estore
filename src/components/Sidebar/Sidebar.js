import styles from './_Sidebar.module.scss'

const Sidebar = () => {

    return (
        <nav className={styles.sidebarCategories}>
            <div className={styles.sectionTitle}>
                <h4>Categories</h4>
            </div>
            <div className={styles.categoryAccordion}>
                <div className={styles.accordion}>
                    <div className={styles.card}>
                        <div className={styles.cardHeading}>
                            <a>Women</a>
                        </div>
                        <div className={styles.cardBody}>
                            <ul>
                                <li><a href="/">Coats</a></li>
                                <li><a href="/">Dresses</a></li>
                                <li><a href="/">Jackets</a></li>
                                <li><a href="/">Shirts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar
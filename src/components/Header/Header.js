import styles from './_Header.module.scss'
import main_logo from '../../assets/img/main_logo.png'

const Header = () => {

    const categoriesMenu = ['Home', 'Men', 'Women', 'Kids', 'Accessories']

    return (
        <header className={styles.header}>
                                       
            <div className={styles.topRow}>
                <div className="container">
                    <nav className={styles.navHeader}>
                        <img className={styles.mainLogo} src={main_logo} alt="shop logo" />
                        <div className={`${styles.search} input-group`}>
                        <button className="btn btn-outline-secondary btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{color: 'white'}}>ALL</button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/main">Action before</a></li>
                            <li><a className="dropdown-item" href="/main">Another action before</a></li>
                            <li><a className="dropdown-item" href="/main">Something else here</a></li>
                        </ul>
                        <input className="form-control" type="text" placeholder="Type to search..." />
                        <button className="btn btn-outline-secondary btn-success" type="button" id="button-addon2">
                            <i className="fas fa-search" style={{color: 'white'}}></i>
                        </button>
                        </div>
                        <div className={styles.userBlock}>
                            <div className={styles.auth}>
                                <i className="far fa-user" style={{color: 'lightgrey'}}></i>
                            </div>
                            <div className={styles.favourite}>
                                <i className="fas fa-heart" style={{color: 'red'}}></i>
                            </div>
                            <div className={styles.cart}>                               
                                <i className="fas fa-shopping-cart" style={{color: 'white'}}></i>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className={styles.bottomRow}>
                <div className="container"> 
                    <nav className={styles.navHeader}>
                        <ul className={styles.categoriesMenu}>                    
                            {categoriesMenu.map(item => {
                                return <li key={item}><a href="/">{item}</a></li>
                            })}
                        </ul>
                    </nav>
                </div>
            </div>           
        </header>
    )
}

export default Header
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMainMenu } from '../../redux/actions/mainMenu/mainMenu'
import styles from './_MainMenu.module.scss'

const MainMenu = (props) => {

    //const categoriesMenu = props.state.mainMenu

    return (
        <div className={styles.bottomRow}>
            <div className="container"> 
                <nav className={styles.navHeader}>
                    <ul className={styles.categoriesMenu}>                    
                        {props.state.mainMenu.map(item => {
                            return <li key={item}><Link to="/">{item}</Link></li>
                        })}
                    </ul>
                </nav>
            </div>
        </div>           
    )
}

const mapStateToProps = (state) => {
    return {state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        mainMenu: dispatch(getMainMenu())
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)
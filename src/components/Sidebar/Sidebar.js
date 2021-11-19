import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './_Sidebar.module.scss'
import * as actions from '../../redux/actions/products/products'

const Sidebar = () => {

    const dispatch = useDispatch()
    const { products } = useSelector(obj => obj)
    useEffect(() => {
        dispatch(actions.getProductCategory())
    }, [])

    return (
        <nav className={styles.sidebarCategories}>
            <div className={styles.sectionTitle}>
                <h4>Categories</h4>
            </div>
 
            {products.categories.map(catHead => {
                return (
                <div className={styles.categoryAccordion} key={catHead.id}>
                    <div className={styles.accordion}>
                        <div className={styles.card}>
                            <div className={styles.cardHeading}>
                                <a>{catHead.category}</a>
                            </div>
                            <div className={styles.cardBody}>
                                <ul>
                                    {catHead.subCategories.map(subCat => {
                                        return <li key={subCat.id}><a href="/">{subCat.subCategory}</a></li>
                                    })}                                                                                  
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>)
            })}

        </nav>
    )
}

export default Sidebar
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import { NavLink } from 'react-router-dom'
import styles from './_Sidebar.module.scss'
import * as actions from '../../redux/actions/products/products'

const Sidebar = () => {

    const dispatch = useDispatch()
    const { products } = useSelector(obj => obj)
    const [categoryFilter, setCategoryFilter] = useState([])
    const [filter, setFilter] = useState({})
    console.log(products)
    useEffect(() => {
        dispatch(actions.getProductCategory())
    }, [dispatch])

    const applyFilter = (checkedItems) => {

        let filterData = {
            ...filter,
            categoryid: checkedItems.map(item => item.id)
        }
        setFilter(filterData)
        dispatch(actions.applyFilter(filterData, products.products))
    }

    const checkboxChange = (e, subCat) => {

        let filteredCategories = [...categoryFilter]

        let unchekedIndex = filteredCategories.findIndex(item => item.id == e.target.value)
        !e.target.checked && filteredCategories.splice(unchekedIndex, 1)
        
        e.target.checked && filteredCategories.push(subCat)
        applyFilter(filteredCategories)
        setCategoryFilter(filteredCategories)
    }

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
                                    {catHead.currentSubCategories.map(subCat => {
                                        return <li key={subCat.id}>
                                            <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                name={subCat.category}
                                                type="checkbox"
                                                value={subCat.id}
                                                /* checked={false} */
                                                onChange={(e) => checkboxChange(e, subCat)} />
                                                <label className="form-check-label">{subCat.category}</label>
{/*                                             <NavLink to='/' onClick={() => applyFilter(subCat)}>
                                                {subCat.category}
                                            </NavLink> */}
                                            </div>
                                        </li>
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
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

    useEffect(() => {
        dispatch(actions.getProductCategory())
    }, [dispatch])

    const applyCategoriesFilter = (checkedItems) => {

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
        applyCategoriesFilter(filteredCategories)
        setCategoryFilter(filteredCategories)

        console.log(categoryFilter)
    }

    const setMinRange = (e) => {
        setFilter({
            ...filter,
            price: {
                ...filter.price,
                min: +e.target.value
            }
        })
    }

    const setMaxRange = (e) => {
        setFilter({
            ...filter,
            price: {
                ...filter.price,
                max: +e.target.value
            }
        }) 
    }

    const applyPriceFilter = () => {
        dispatch(actions.applyFilter(filter, products.products))
    }

    const cancelAllFilters = () => {      
        
        setFilter({})
        setCategoryFilter([])
        dispatch(actions.applyFilter(null, products.products))
        console.log(categoryFilter)
    }
    
    return (
        <nav>
            <div className={styles.sidebarCategories}>
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
                                                    checked={categoryFilter.find(el => el.id === subCat.id)}
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
            </div>

            <div className={styles.sidebarCategories}>
                <div className={styles.sectionTitle}>
                    <h4>Shop by price</h4>
                </div>
                <div>
                    {`Price: ${filter?.price?.min || 0} - ${filter?.price?.max || 0}`}
                </div>
                <div className={styles.sectionTitle}>
                    {'Min'}<input type="range" min={1} max={150} onChange={(e) => setMinRange(e)}/>
                </div>
                <div className={styles.sectionTitle}>
                    {'Max'}<input type="range" min={151} max={2000} onChange={(e) => setMaxRange(e)}/>
                </div>
                <div className={styles.sectionTitle}>
                    <button className={styles.btnSidebar} onClick={() => applyPriceFilter()}>Apply filter</button>
                </div>
                <div className={styles.sectionTitle}>
                    <button className={styles.btnSidebar} onClick={() => cancelAllFilters()}>Cancel all filters</button>
                </div>
                
            </div>
        </nav>
    )
}

export default Sidebar
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import * as actions from '../../redux/actions/actions'
import styles from './_Product.module.scss'

const Product = () => {

    const dispatch = useDispatch()
    const {products: {products, filteredProducts}, cart} = useSelector(store => store)

    useEffect(() => {
        dispatch(actions.getProductItem())
    }, [dispatch])

    filteredProducts.length === 0 && products.map(item => filteredProducts.push(item))
    
/*     useEffect(() => {

    }, [cart]) */
    
    const addToCart = (item) => {
        dispatch(actions.addItemToCart(item))
    }

    return (
        <div className="row">

            {filteredProducts.map(item => {

                return (
                    <div className="col-lg-3 col-md-6" key={item.id}>
                        <div className={styles.productItem}>
                            <div className={styles.productItemPic}>
                                <img className={styles.productItemPic} src={item.src} alt={item.name}/>
                                <ul className={styles.productHover}>
                                    <li>
                                        <NavLink to='/'><span className="fa fa-arrows-alt"/></NavLink>                                       
                                    </li>
                                    <li onClick={() => addToCart(item)}>
                                        <NavLink to='/'><span className="fas fa-shopping-cart"/></NavLink>                                      
                                    </li>
                                </ul>
                            </div>             
                            <div className={styles.productItemText}>
                                <h6>
                                    <NavLink to='/'>{item.name}</NavLink>
                                </h6>
                                <div className={styles.rating}>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                </div>
                                <div className={styles.productPrice}>{item.price}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
            

        </div>
    )
}

export default Product
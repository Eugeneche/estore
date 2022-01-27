import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../redux/actions/actions'
import styles from './_Product.module.scss'

const Product = () => {

    const dispatch = useDispatch()
    const {products: {products, filteredProducts}/* , cart */ } = useSelector(store => store)
    
    useEffect(() => {
        dispatch(actions.getProductItem())
    }, [dispatch])

    filteredProducts.length === 0 && products.map(item => filteredProducts.push(item))
    
/*     useEffect(() => {
        console.log(cart)
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
                                        <Link to={"/product-" + item.id} state={{item}}>
                                            <span className="fa fa-arrows-alt"/>
                                        </Link>                                       
                                    </li>
                                    <li onClick={() => addToCart(item)}>
                                        <Link to={"/product-" + item.id} state={{item}}>
                                            <span className="fas fa-shopping-cart"/>
                                        </Link>                                      
                                    </li>
                                </ul>
                            </div>             
                            <div className={styles.productItemText}>
                                <h6>
                                    <Link to={"/product-" + item.id} state={{item}}>{item.name}</Link>
                                </h6>
                                <div className={styles.rating}>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                </div>
                                <div className={styles.productPrice}>${item.price}</div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Product
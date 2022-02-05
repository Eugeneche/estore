import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions/actions'
import styles from './_ProductCard.module.scss'

const ProductCard = () => {

    const[qty, setQty] = useState(1)

    let location = useLocation()
    let item = location.state.item

    const dispatch = useDispatch()

    const addToCart = (item) => {

        let changedCart = item
        changedCart.currentItemQty = qty

        dispatch(actions.addItemToCart(changedCart))
    }

    return (
        <div className="container">
            <div className="row">
                <div className={styles.productCardContainer + " col-lg-8"}>
                    <div className="row">
                        <h1 className={styles.title}>{location.state.item.name}</h1>
                        <div className="col-lg-5">
                            <img src={item.src} alt={`${item.name}`} />
                        </div>
                        <div className={styles.infoBlock + " col-lg-7"}>
                            <p className={styles.description}>{item.description}</p>
                            <div className={styles.addCartBlock}>
                                <button className={styles.cartIcon} onClick={() => addToCart(item)}>
                                    <i className="fas fa-shopping-cart"/>
                                </button>
                                <input className={styles.skuQuantity} 
                                    type="number"
                                    min={1}
                                    value={qty}
                                    onChange={(e) => setQty(+e.target.value)}/>
                            </div>
                            <div className={styles.rating}>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                            </div>
                            <div className={styles.productPrice}>${parseFloat(item.price).toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
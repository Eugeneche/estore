import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './_ProductCard.module.scss'

const ProductCard = () => {

    let location = useLocation()
    let item = location.state.item
    console.log(location)

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
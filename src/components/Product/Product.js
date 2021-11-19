import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProductItem } from '../../redux/actions/products/products'
import styles from './_Product.module.scss'
import * as productAPI from '../../APIs/APIs'


/* const products = [
    // the alternative way to: import goodsImg from '../../assets/img/shop/shop-1.jpg'
    //require("../../assets/img/shop/shop-1.jpg").default,
    require("../../assets/img/shop/shop-2.jpg").default,
    require("../../assets/img/shop/shop-3.jpg").default,
    require("../../assets/img/shop/shop-4.jpg").default,
    require("../../assets/img/shop/shop-5.jpg").default,
    require("../../assets/img/shop/shop-6.jpg").default,
    require("../../assets/img/shop/shop-7.jpg").default,
    require("../../assets/img/shop/shop-8.jpg").default,
    require("../../assets/img/shop/shop-9.jpg").default,
] */

const Product = () => {

    const dispatch = useDispatch()
    const {products: {products}} = useSelector(store => store)
    useEffect(() => {
        dispatch(getProductItem())
    }, [])

    console.log(products)
    return (
        <div className="row">

            {products.map((item, idx) => {

                return (
                    <div className="col-lg-3 col-md-6" key={item.id}>
                        <div className={styles.productItem}>
                            <div className={styles.productItemPic}>
                                <img className={styles.productItemPic} src={item.src} alt={item.name}/>
                                <ul className={styles.productHover}>
                                    <li>
                                        <a href={item.src}><span className="fa fa-arrows-alt"/></a>                                       
                                    </li>
                                </ul>
                            </div>             
                            <div className={styles.productItemText}>
                                <h6>
                                    <a href="/">{item.name}</a>
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
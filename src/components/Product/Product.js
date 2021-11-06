import React from 'react'
import styles from './_Product.module.scss'
//import goodsImg from '../../assets/img/shop/shop-1.jpg'

const products = [
    /* the alternative way to: import goodsImg from '../../assets/img/shop/shop-1.jpg' */
    require("../../assets/img/shop/shop-1.jpg").default,
    require("../../assets/img/shop/shop-2.jpg").default,
    require("../../assets/img/shop/shop-3.jpg").default,
    require("../../assets/img/shop/shop-4.jpg").default,
    require("../../assets/img/shop/shop-5.jpg").default,
    require("../../assets/img/shop/shop-6.jpg").default,
    require("../../assets/img/shop/shop-7.jpg").default,
    require("../../assets/img/shop/shop-8.jpg").default,
    require("../../assets/img/shop/shop-9.jpg").default,
]

const Product = () => {

    return (
        <div className="row">

            {products.map((item, idx) => {

                return (
                    <div className="col-lg-3 col-md-6" key={idx}>
                        <div className={styles.productItem}>
                            <div className={styles.productItemPicture}>
                                <img className={styles.productItemPicture} src={item} alt="jacket"/>
                                <ul className={styles.productHover}>
                                    <li>
                                        <a href={item}><span className="fa fa-arrows-alt"/></a>                                       
                                    </li>
                                </ul>
                            </div>             
                            <div className={styles.productItemText}>
                                <h6>
                                    <a href="">Foory Hooded</a>
                                </h6>
                                <div className={styles.rating}>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                </div>
                                <div className={styles.productPrice}>$699</div>
                            </div>
                        </div>
                    </div>
                )
            })}
            

        </div>
    )
}

export default Product
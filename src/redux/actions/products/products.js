import * as actionTypes from './types'
import axios from 'axios'


export const getProductCategory = () => {
    return async (dispatch) => {
        await axios({
            method: 'GET',
            url: 'http://localhost:5000/product/api/categories'
        }).then(response => {
            
            let allCategories = response.data.data
            let parentCategories = allCategories.filter(item => item.parentcategoryid === null)

            parentCategories.map(parentCategory => {
                let currentSubCategories = []              

                parentCategory.currentSubCategories = currentSubCategories
                allCategories
                .filter(item => item.parentcategoryid === parentCategory.id)
                .map(el => {
                    let subCategory = {
                        id: el.id,
                        category: el.category,
                        parentcategoryid: el.parentcategoryid,
                        createdatetime: el.createdatetime
                    }
                    return currentSubCategories.push(subCategory)
                    //return currentSubCategories
                })
                return currentSubCategories
            })

            return dispatch({
                type: actionTypes.PRODUCT_CATEGORY,
                payload: parentCategories
            })
        }).catch(err => console.log('Response error', err))

    }
}

export const getProductItem = () => {
    return async (dispatch) => {
        await axios({
            method: 'GET',
            url: 'http://localhost:5000/product/api/products'
        }).then(response => {
            
            try {
                let productList = response.data.data.map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        categoryid: item.categoryid,
                        src: `http://localhost:5000/${item.src}`,
                        price: item.price,
                        createdtime: item.createdtime
                    }
                })
                dispatch(_getProductItem(productList))
                dispatch(_getFilteredProducts(productList))
            }
            catch(ex) {
                console.log(ex)
            }
            
        }).catch(err => console.log('Response error', err))

    }
}

const _getProductItem = (data) => {
    return {
        type: actionTypes.PRODUCT_ITEM,
        payload: data
    }
}

const _getFilteredProducts = (data) => {
    //console.log(data)
    return {
        type: actionTypes.FILTER_PRODUCT,
        payload: data
    }
}

export const applyFilter = (filterParams, productData) => {
    return async (dispatch) => {
        let query = buildQuery(filterParams)
        dispatch(_getFilteredProducts(filterByCategory(productData, query)))
        //console.log(productData)
        
    }
}

const buildQuery = (fiterData) => {
    const queryData = {}
    for (let key in fiterData) {
        queryData[key] = fiterData[key]
    }
    console.log(queryData)
    return queryData
}

function filterByCategory(allProducts, queryData) {
    let filteredProducts = allProducts.filter(item => {
        for (let key in queryData) {
            if (queryData[key] === undefined) return false
            else if (!queryData[key].includes(item[key])) return false
        } 
        return true
    })
    //console.log(allProducts)
    //console.log(queryData)
    //console.log(filteredProducts)
    return filteredProducts
}

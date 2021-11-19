import * as actionTypes from './types'
import * as API from '../../../APIs/APIs'


export const getProductCategory = () => {
    return async (dispatch) => {
        return dispatch({
            type: actionTypes.PRODUCT_CATEGORY,
            payload: API.productCategories
        })
    }
}

export const getProductItem = () => {
    return async (dispatch) => {
        return dispatch({
            type: actionTypes.PRODUCT_ITEM,
            payload: API.productInfo
        })
    }
}
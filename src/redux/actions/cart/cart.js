//import axios from 'axios'
import * as actionTypes from './types'

export const addItemToCart = (data) => {
    return async (dispatch) => {
        dispatch(_addItemToCart(data))
    } 
} 

const _addItemToCart = (itemData) => {
    return {
        type: actionTypes.ADD_ITEM_CART,
        payload: itemData
    }
}
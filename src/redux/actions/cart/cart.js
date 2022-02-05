import { ActionTypes } from './types'

export const addItemToCart = (data) => {
    return async (dispatch) => {
        dispatch(_addItemToCart(data))
    } 
} 

const _addItemToCart = (itemData) => {
    return {
        type: ActionTypes.ADD_ITEM_CART,
        payload: itemData
    }
}
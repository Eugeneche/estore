import * as actionTypes from '../../actions/products/types'

const initialState = {
    categories: [],
    products: [
/*         {
            imgSrc: '',
            name: '',
            rating: '',
            price: null
        } */
    ]
}

export const products = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.PRODUCT_CATEGORY:
            return {
                ...state,
                categories: action.payload
            }
        case actionTypes.PRODUCT_ITEM:
            return {
                ...state,
                products: action.payload
            }
        default: 
        return state
    }
}
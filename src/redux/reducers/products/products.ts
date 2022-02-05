import { ActionTypes } from '../../actions/products/types'

const initialState = {
    categories: [],
    products: [],
    filteredProducts: []
}

type actionProductCategory = {
    type: ActionTypes.PRODUCT_CATEGORY,
    payload: {
        id: number,
        category: string, 
        parentcategoryid: null | number, 
        createdatetime: string, 
        currentSubCategories: []
    }
}

type actionProductItem = {
    type: ActionTypes.PRODUCT_ITEM,
    payload: {
        categoryid: number
        createdtime: string
        description: string,
        id: number,
        name: string
        price: number
        src: string
    }
}

type actionProductFilter = {
    type: ActionTypes.FILTER_PRODUCT,
    payload: {
        categoryid: number
        createdtime: string
        description: string,
        id: number,
        name: string
        price: number
        src: string
    }
}

export const products = (state = initialState, action: actionProductCategory | actionProductItem | actionProductFilter) => {

    switch(action.type) {
        case ActionTypes.PRODUCT_CATEGORY:
            return {
                ...state,
                categories: action.payload
            }
        case ActionTypes.PRODUCT_ITEM:
            return {
                ...state,
                products: action.payload
            }
        case ActionTypes.FILTER_PRODUCT:
            return {
                ...state,
                filteredProducts: action.payload              
            }
        default: 
        return state
    }
}
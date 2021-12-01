import * as actionTypes from '../../actions/cart/types'

const initialState = {
    cart: [],
    totalSqus: 0,
    totalQuantities: 0,
    totalPrice: 0
}

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM_CART:
            console.log(action.payload.price)

            let totalSqus = addNewSqu()
            let totalQuantitiesBefore = state.cart.length
            let totalPriceBefore = state.cart.reduce((acc, cur) => acc + cur.price, 0)

            function addNewSqu() {
                let skusIds = [...new Set(state.cart.map(sku => sku.id))]
                !skusIds.includes(action.payload.id) && skusIds.push(action.payload.id)
                return skusIds.length
            }
            console.log(state.cart)
            return {
                ...state,
                cart: [...state.cart, action.payload],
                totalSqus: totalSqus,
                totalQuantities: totalQuantitiesBefore + 1, //???
                totalPrice: +(totalPriceBefore + action.payload.price).toFixed(2)
            }

        default: return state
    }
}


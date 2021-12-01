import { combineReducers } from 'redux'
import { mainMenu } from './mainMenu/mainMenu'
import { products } from './products/products'
import { cart } from './cart/cart'

const rootReducer = combineReducers({
    mainMenu,
    products,
    cart // spread?
})

export default rootReducer
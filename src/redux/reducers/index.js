import { combineReducers } from 'redux'
import { mainMenu } from './mainMenu/mainMenu'
import { products } from './products/products'
//import { productItem } from './productItem/productItem'

const rootReducer = combineReducers({
    mainMenu,
    products
})

export default rootReducer
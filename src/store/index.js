import { createStore, combineReducers } from 'redux'
import ProductsReducer from './reducers/ProductsReducer'
import CartReducer from './reducers/CartReducer'

const root = combineReducers({
    ProductsReducer,
    CartReducer
})

const store = createStore(root, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
import { combineReducers } from "redux";
import { productsReducer, selectedProductReducers,addProductReducers } from './Reducers';

const Reducers = combineReducers({
    allProducts: productsReducer,
    selectedProduct: selectedProductReducers,
    productsInTheCart: addProductReducers,

})
export default Reducers;
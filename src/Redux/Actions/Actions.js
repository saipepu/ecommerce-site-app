import axios from "axios";
import { ActionTypes } from './actionTypes';

// axios.create({
//     baseURL: "https://fakestoreapi.com",
// })

export const fetchProducts = () => async(dispatch) => {
    console.log('hey')
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({
        type: ActionTypes.FETCH_PRODUCTS,
        payload: response.data
    })
}
export const fetchSelectedProduct = (id) => async(dispatch) => {
    console.log("selected product")
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(response)
    dispatch({
        type: ActionTypes.FETCH_SELECTED_PRODUCT,
        payload: response.data
    })
}
export const addProductToCart = (id) => async(dispatch) => {
    console.log("add to cart");
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    dispatch({
        type: ActionTypes.ADD_TO_CART,
        payload: response.data
    })
}
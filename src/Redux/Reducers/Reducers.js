import { ActionTypes } from "../Actions/actionTypes";

const initialState = {
    products: []
}

export const productsReducer = (state = initialState,{ type, payload} ) => {

    switch(type){
        case ActionTypes.FETCH_PRODUCTS:
            return{
                ...state,
                products: payload,
            }
        default:
            return state;
    }
}
export const selectedProductReducers = (state = {},{ type, payload} ) => {
    console.log(payload)
    switch(type) {
        case ActionTypes.FETCH_SELECTED_PRODUCT:
            return{
                ...state,
                ...payload,
            }
        default:
            return state;
    }
}
const cartInitial = {
    addedproduct: [],
}
export const addProductReducers = (state = [], {type,payload} ) => {
    console.log("adding", payload)
    switch(type){
        case ActionTypes.ADD_TO_CART:
            return[
                ...state,
                [payload]
            ]
        default:
            return state;
    }
}
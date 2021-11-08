import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/Actions/Actions';
import DisplayAllProducts from './DisplayAllProducts';


const FetchAllProducts = () => {

    const {allProducts} = useSelector((state) => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    },[]);// eslint-disable-line react-hooks/exhaustive-deps
    console.log(allProducts.products);
    
    return(
        <div className="fetchAllProducts">
            <DisplayAllProducts />
        </div>
    )
}
export default FetchAllProducts;

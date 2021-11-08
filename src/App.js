import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FetchAllProducts from './fetchAllProducts/FetchAllProducts';
import FetchSelectedProduct from './fetchSelectedProducts/FetctSelectedProduct';
import DisplayCartProducts from './fetchCartProduct/DisplayCartProducts';

const App = () => {

    return (
        <>
        <Router>
            <Switch>
                <Route path="/" exact component={FetchAllProducts} />
                <Route path="/productDetail/:id" exact component={FetchSelectedProduct}/>
                <Route path="/yourAddedProducts" exact component={DisplayCartProducts} />
            </Switch>
        </Router>
        </>
    )
}
export default App;
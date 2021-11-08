import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectedProduct } from '../Redux/Actions/Actions';
import { AppBar, Container,Typography ,Toolbar, Box ,Button,Grid ,Card, CardMedia, CardContent, CardActions} from '@mui/material';
import useStyles from '../fetchAllProducts/AllProductStyle';
import { addProductToCart } from '../Redux/Actions/Actions';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const DisplaySelectedProducts = () => {
    const classes = useStyles();
    const product = useSelector((state) => state.selectedProduct)

    const addingProduct = useSelector((state) => state.productsInTheCart)
    let items = addingProduct.length

    let { title, image, price, category, description, rating} = product;
    if( rating === undefined){
        let showRating = false;
    }else{
        let showRating = true;
    }
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if( id && id !== ''){
            dispatch(fetchSelectedProduct(id))
        }
    },[])

    const addToCart = () => {
        dispatch(addProductToCart(id))
        
    }

    return(
        <>
        <AppBar position="static" className={classes.navbar}>
            <Toolbar className={classes.detailPageToolbar}>
                <div className={classes.detailPageIconWrapper}>
                <Link to="/" className={classes.linkStyle}>
                    <ArrowBackIcon  color="action"/>
                </Link>
                <Typography variant="h5">
                    Product Detail
                </Typography>
                </div>
                <div className={classes.iconAndBtnWrapper}>
                <div className={classes.cartIconWrapper}>
                <Link to="/yourAddedProducts">
                        <ShoppingCartOutlinedIcon fontSize="large" className={classes.cartIcon}></ShoppingCartOutlinedIcon>
                    </Link>
                    <Typography variant="h7" className={classes.items}>
                        {items}
                    </Typography>
                </div>
                <Button variant="outlined" color="inherit">Login</Button>
                </div>
            </Toolbar>
        </AppBar>

        <Grid container direction="row" spacing={2} className={classes.marginBottom}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
                <CardMedia
                    component="img"
                    height="100%"
                    objectfit="contain"
                    image={image}
                    alt={title}/>
            </Grid>
            <Grid item xs={5} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h7" gutterBottom>
                    {rating ? `${rating.rate} average rating of ${rating.count} customer` : 'no rating yet'
                    }
                </Typography>
                <Typography variant="h5" gutterBottom>
                    {price} $
                </Typography>
                <Button color="primary" variant="contained" onClick={addToCart}>Add to Cart</Button>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
        <Grid container height="300">
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Typography variant="h6">
                    {description}
                </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>

        </>
    )
}
export default DisplaySelectedProducts;
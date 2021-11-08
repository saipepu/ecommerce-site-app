import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux';
import { AppBar, Container,Typography ,Toolbar, Box ,Button,Grid ,Card, CardMedia, CardContent, CardActions} from '@mui/material';
import useStyles from '../fetchAllProducts/AllProductStyle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const DisplayCartProducts = () => {
    const classes = useStyles();
    const addedproduct = useSelector((state) => state.productsInTheCart)
    const items = addedproduct.length;
    console.log(addedproduct)

    return(
        <>
        <AppBar position="static" className={classes.navbar}>
            <Toolbar className={classes.detailPageToolbar}>
                <div className={classes.yourCartWrapper}>
                <Link to="/" className={classes.linkStyle}>
                    <ArrowBackIcon  color="action"/>
                </Link>
                <Typography variant="h5">
                    Your Cart
                </Typography>
                </div>
                <div className={classes.iconAndBtnWrapper}>
                <div className={classes.cartIconWrapper}>
                <ShoppingCartOutlinedIcon fontSize="large" className={classes.cartIcon}>

                </ShoppingCartOutlinedIcon>
                    <Typography variant="h7" className={classes.items}>
                        {items}
                    </Typography>
                </div>
                <Button variant="outlined" color="inherit">Login</Button>
                </div>
            </Toolbar>
        </AppBar>
        <Grid container direction="row">
            <Grid item xs={1}></Grid>
                <Grid item container xs={10} spacing={2}>
        {addedproduct.map((list) => (    list.map((product) => (
            <Grid item xs={6} sm={4} key={product}>
            <Link to={`productDetail/${product.id}`} className={classes.linkStyle}>
                <Card  className={classes.card}>
                    <CardMedia
                        component="img"
                        height="150"
                        width="100%"
                        image={product.image}
                        alt="image title" />
                    <CardContent>
                        <Typography  variant="h8" component="div" className={classes.cardTitle}>
                            {product.title}
                        </Typography>
                        {/* <Typography variant="body3" color="text.secondary">
                            {product.category}
                        </Typography> */}
                    </CardContent>
                    <CardActions className={classes.detailBtn}>
                        <Button size="small">Details</Button>
                    </CardActions>
                </Card>
            </Link>
        </Grid>
        ))
        ))}
                        </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </>
    )
}
export default DisplayCartProducts;
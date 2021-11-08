import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { AppBar, Container,Typography ,Toolbar, Box ,Button,Grid ,Card, CardMedia, CardContent, CardActions} from '@mui/material';
import useStyles from './AllProductStyle'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const DisplayAllProducts = () => {
    const classes = useStyles();
    const products = useSelector((state) => state.allProducts.products);
    console.log(products);
    const addingProduct = useSelector((state) => state.productsInTheCart)
    let items = addingProduct.length

    // const renderProducts = products.map((product) => {


    //     return(
    //             <Link to={`productDetail/${id}`} key={id}>
    //                     <Grid items xs={4}>
    //                         <Card sx={{ maxWidth: 345}} gutterBottom>
    //                             <CardMedia
    //                                 component="img"
    //                                 height="120"
    //                                 objectFit="cover"
    //                                 image={image}
    //                                 alt="image title" />
    //                             <CardContent>
    //                                 <Typography gutterBottom variant="h7" component="div">
    //                                     {title}
    //                                 </Typography>
    //                                 <Typography variant="body2" color="text.secondary">
    //                                     {category}
    //                                 </Typography>
    //                             </CardContent>
    //                             <CardActions>
    //                                 <Button size="small">Details</Button>
    //                             </CardActions>
    //                         </Card>
    //                     </Grid>
    //             </Link>
    //     )
        
    // })
    return(
        <>
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar> 
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1}}>
                        FakeStore
                    </Typography>
                        <div className={classes.cartIconWrapper}>
                        <Link to="/yourAddedProducts">
                        <ShoppingCartOutlinedIcon fontSize="large" className={classes.cartIcon}></ShoppingCartOutlinedIcon>
                    </Link>
                            <Typography variant="h7" className={classes.items}>
                                {items}
                            </Typography>
                    </div>
                    <Button variant="outlined" color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
            <Grid container direction="row">
            <Grid item xs={1}></Grid>
                <Grid item container xs={10} spacing={2}>
                    {/* MAPPING */}
                {products.map((product) => (

                    <Grid item xs={6} sm={4} key={product.id}>
                        <Link to={`productDetail/${product.id}`} className={classes.linkStyle}>
                        <Card className={classes.card}>
                            <CardMedia
                                component="img"
                                height="150"
                                width="100%"
                                objectfit="contain"
                                image={product.image}
                                alt="image title" />
                            <CardContent>
                                <Typography variant="h8" component="div" className={classes.cardTitle}>
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
                ))}
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </>
    )
}
export default DisplayAllProducts;
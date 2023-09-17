import { Typography, Grid, Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import TotalView from './TotalView'
import EmptyCart from './EmptyCart'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

   const cartDetails = useSelector(state => state.cart);
   const { cartItems } = cartDetails;

   const dispatch = useDispatch();

   useEffect (() => {
    if (cartItems && match.params.id !== cartItems.id)
        dispatch (addToCart(match.params.id));
        console.log(cartItems);
   },[dispatch, cartItems, match])

   const removeItemFromCart = (id) =>{
         dispatch(removeItemFromCart(id));
   }

   const buyNow = () => {
    loadRazorpay(500)
   }

  return (
     <>
        {
            cartItems.length ?
            <Grid container className=''>
               <Grid item lg={9} md={9} xs={12} sm={12} className='' >
                <Box className=''>
                    <Typography >My Cart</Typography>
                </Box>

                {
                    cartItems.map((item) => (
                        <CartItem item={item} removeItemFromCart={removeItemFromCart} />
                    ))
                }
                <Box>
                   <Button onClick={() => buyNow()} variant='contained' className='' >Place Order</Button>
                </Box>

               </Grid>
               <Grid item lg={3} md={3} sm={12} xs={12}>
                <TotalView cartItems={cartItems} />
               </Grid>
            </Grid> : <EmptyCart />
        }
     </>

    )
}

export default Cart
import { Box, Button } from '@mui/material'
import {ShoppingCart as Cart, FlashOn as Flash} from ' @mui/icons-material'
import React, { useState } from 'react'
import './ActionItem.css'

const ActionItem = () => {

   const history = useHistory();
   const {account} = useContext(loginContext);
   const {id, price, detailUrl, title} = product;

   const [quantity, setQuantity] = useState(1);

   const dispatch = useDispatch();

   const buyNow = () =. {
    loadRazorpay(600);
   }

   const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    history.push('/cart');
   }

  return (
    <Box>
        <img src={product.detailUrl} alt='' className='' /><br/>
        <Button onClick={() => addItemToCart()} variant="contained"><Cart/>Add to Cart</Button>
        <Button onClick={() => buyNow()}  variant="contained"><Flash/>Buy Now</Button>
    </Box>
  )
}

export default ActionItem
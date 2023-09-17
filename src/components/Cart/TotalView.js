import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const TotalView = ({ cartItems }) => {

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const totalAmount = () => {
    let price = 0, discount = 0;
    console.log(cartItems);
    cartItems.map(item => {
        price += item.price.mrp
        discount += (item.price.mrp - item.price.cost) 
    })
    setPrice(price);
    setDiscount(discount);
}

  useEffect(() => {
    totalAmount();
  }, [cartItems,totalAmount]);

  return (
    <Box>
        <Box>
            <Typography>PRICE DETAILS</Typography>
        </Box>

        <Box>
            <Typography>Price({cartItems?.length} item)<span>>₹{price}</span></Typography>
            <Typography>Discount<span>-₹{discount}</span></Typography>
            <Typography>Delivery Charges<span>₹40</span></Typography>
            <Typography>Total Amount<span>₹{price - discount + 40}</span></Typography>
            <Typography>You will save ₹{discount - 40} on this order</Typography>
        </Box>
    </Box>
  )
}

export default TotalView
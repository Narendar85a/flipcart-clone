import { Box, Typography } from '@mui/material'
import React from 'react'
import './EmptyCart.css'

const EmptyCart = () => {

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

  return (
   <Box className=''>
    <Box className=''>
        <img src={imgurl} alt='' className='' />
        <Typography>Your cart is empty?</Typography>
        <span>Add item to it now.</span>
    </Box>
   </Box>
  )
}

export default EmptyCart
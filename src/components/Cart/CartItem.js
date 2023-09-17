import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import GroupButton from './GroupButton'

const CartItem = ({item, removeItemFromCart}) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

  return (
    <Card className='' >
        <Box className='' >
            <img src={item.url} alt='' className='' />
            <GroupButton />
        </Box>

        <Box className=''>
            <Typography>{item.title.longTitle}</Typography>
            <Typography>Seller:RetailNet<span><img src={fasurred} alt=''  /></span></Typography>
            <Typography>
                <span className=''>₹{item.price.cost}</span>
                <span className=''><strike>₹{item.price.mrp}</strike></span>
                <span>{item.price.discount} off</span>
            </Typography>
            <Button className='' onClick={() => removeItemFromCart(item.id)}>Remove</Button>
        </Box>
    </Card>
  )
}

export default CartItem
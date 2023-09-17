import { Badge, Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'

const ProductDetail = () => {

    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

  return (
      <>
        <Typography>Available offers</Typography>
        <Box className=''>
            <Typography><Badge className='' />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
            <Typography><Badge className='' />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
            <Typography><Badge className='' />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
            <Typography><Badge className='' />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
        </Box>

        <Table>
            <TableBody>
                <TableRow className=''>
                    <TableCell className=''>Delivery</TableCell>
                    <TableCell>Delivery by {date.toDateString()} | ₹40</TableCell>
                </TableRow>
                <TableRow className=''>
                    <TableCell className=''>Warranty</TableCell>
                    <TableCell>No Warranty</TableCell>
                </TableRow>
                <TableRow className=''>
                    <TableCell className=''>Seller</TableCell>
                    <TableCell className=''>
                        <span>SuperComNet</span>
                        <Typography>GST invoice available</Typography>
                        <Typography>View more sellers starting from ₹329</Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2}>
                        <img src={adURL} alt='' />
                    </TableCell>
                </TableRow>
                <TableRow className=''>
                    <TableCell className=''>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </>
    )
}

export default ProductDetail
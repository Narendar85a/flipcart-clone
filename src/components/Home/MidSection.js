import React from 'react'
import { Grid } from '@mui/material';
import clsx from 'clsx';
import './MidSection.css';


const ImageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const MidSection = () => {

   const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';


  return (
    <>
        <Grid lg={12} sm={12} md={12} xs={12} container className='grid' >
           {
            ImageURL.map((image) =>(
                <Grid item lg={4} md={4} sm={12} xs={12}>
                   <img src={image} alt='' className='grid-img' />
                </Grid>
            ) )
           }

        </Grid>
        <img src={url} alt='' className='grid-img2' />
    </>
  )
}

export default MidSection
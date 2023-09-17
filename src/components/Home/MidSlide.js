import React from 'react'
import { Box } from '@mui/material';
import Slide from './Slide'

const MidSlide = ({products}) => {

    const addURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  return (
     <Box className='midSlide' >

        <Box className='mid-left' >
            <Slide 
                data={products}
                title='Deal of the Day'
                timer={true}
                multi={true}
            />
        </Box>

        <Box className='mid-right' >
            <img src={addURL} alt='' className='' />
        </Box>
     </Box>
  )
}

export default MidSlide
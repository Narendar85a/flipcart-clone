import React from 'react'
import './Banner.css'
import { bannerData } from '../../constant/data'
import Carousel from 'react-material-ui-carousel'

const Banner = () => {
  return (
    <Carousel
       autoPlay={true}
       animation='slide'
       indicators={false}
       navButtonsAlwaysVisible={true}
       cycleNavigation={true}
       className='banner'
       StyleProvider
       navButtonsProps={{
        style:{
            color:' #494949',
            backgroundColor: '#FFFFFF',
            borderRadius: 0,
            margin: 0,
            width: 50,
        }
       }}
    >
        {
            bannerData.map(image => (
                <img src={image} alt='' className='banner-img' />
            ))
        }
    </Carousel>
  )
}

export default Banner
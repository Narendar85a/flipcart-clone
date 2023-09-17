import React from 'react'
import './Slide.css'
import { Typography, Box, Button, Divider, } from '@mui/material';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import Carousel from 'react-material-ui-carousel';

const responsive = {
   desktop: {
    breakpoint : { max: 3000, min: 1024},
    items: 5,
   },

   tablet: {
    breakpoint : { max: 1024, min: 464},
    items: 2,
   },

   mobile: {
    breakpoint : { max: 464, min: 0},
    items: 1,
   }
};

const MultiSlide = ({data, timer, title}) => {

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const rendered = ({hours, minutes, seconds}) => {
        return <span className=''>{hours} : {minutes} : {seconds} Left</span>
    }

  return (
    <Box className='multi-slide'>
        <Box className='multi-container'>
            <Typography className='multi-title'>{title}</Typography>
            {
                timer && <Box className='multi-timer'>
                    <img src={timerURL} alt='time clock' />
                    <Countdown date={Date.now() + 5.04e+7} rendered={rendered} />
                </Box>
            }
            <Button variant='contained' color='primary' className='multi-btn' >View All</Button>
        </Box>
        <Divider />
        <Carousel
           swipe={false}
           draggable={false}
           responsive={responsive}
           centerMode={true}
           infinite={true}
           autoPlay={true}
           autoPlaySpeed={10000}
           keyBoardControl={true}
           showDots={false}
        >
            {
                data.map(temp => (
                    <Link to={`product/${temp.id}`} style={{textDecoration: 'none'}}>
                       <Box className='' >
                        <img src={temp.url} alt='' className='multi-img' />
                        <Typography className='multi-text'>{temp.title.shortTitle}</Typography>
                        <Typography className='multi-text'>{temp.discount}</Typography>
                        <Typography className='multi-text'>{temp.tagLine}</Typography>
                       </Box>
                    </Link>
                ))
            }
        </Carousel>
    </Box>
  )
}

const Slide = (props) => {
    return (
        <>
            {
             props.multi === true ? <MultiSlide {...props} /> : ''
            }
        </>
    )
}



export default Slide
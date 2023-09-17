import React from 'react'
import { Box } from '@mui/material'
import NavBar from './Home/NavBar'
import Banner from './Home/Banner'
// import MidSlide from './Home/MidSlide'
// import Slide from './Home/Slide'
import MidSection from './Home/MidSection'
// import { useSelector, useDispatch } from 'react-redux'
// import {getProducts as listProducts} from '../redux/action/ProductAction' 
// import { useEffect } from 'react'

const Home = () => {

//    const getProducts = useSelector(state => state.getProducts);
//    const { products } = getProducts;

//    const dispatch = useDispatch();
     
//    useEffect(() => {
//     dispatch(listProducts())
//    }, [dispatch])

  return (
    <>
        <NavBar />
        <Box className='' >
            <Banner />
            {/* <MidSlide products={products} /> */}
            <MidSection />
            {/* <Slide 
                data={products} 
                title='Discounts for You'
                timer={false} 
                multi={true}
            />
            <Slide 
                data={products} 
                title='Suggested Items'
                timer={false} 
                multi={true}
            />
            <Slide 
                data={products} 
                title='Top Selection'
                timer={false} 
                multi={true}
            />
            <Slide 
                data={products} 
                title='Recommended Items'
                timer={false} 
                multi={true}
            /> */}
        </Box>
    </>
  )
}

export default Home
import { useState, useEffect } from 'react';
import './DetailView.css'
import { Box, Grid, Typography } from '@mui/material'
import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';



const data = { 
    id: '',
    url: '', 
    detailUrl: '',
    title: {
        shortTitle: '',
        longTitle: '',
    }, 
    price: {
        mrp: 0,
        cost: 0,
        discount: ''
    },
    description: '',
    discount: '', 
    tagline: '' 
};

const DetailView = () => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const [ product, setProduct ] = useState(data);
    const [ loading, setLoading ] = useState(false);
    const { id } = useParams();

    const [ quantity, setQuantity ] = useState(1);

    const productDetails = useSelector(state => state.getProductDetails);

    const dispatch = useDispatch();

    useEffect(() => {
        if(product && match.params.id !== product.id)   
            dispatch(getProductDetails(match.params.id));
    }, [dispatch, product, match, loading]);

    const getProductValues = async () => {
        setLoading(true);
        const response = await getProductById(id);
        console.log(response.data);
        setProduct(response.data);
        setLoading(false);
    }

    useEffect(() => {
        getProductValues();
    }, [getProductValues]);

  return (
    <Box className=''>
        {
            product && Object.keys(product).length &&
            <Grid container className='' >
                <Grid item lg={4} md={4} sm={8} xs={12} >
                    <ActionItem product={product} />
                </Grid>

                <Grid item lg={8} md={8} sm={8} xs={12} className=''>
                <Typography>{product.title.longTitle}</Typography>
                <Typography className=''>8 Ratings & 1 Reviews
                  <span><img src={} alt='' /></span>
                </Typography>
                <Typography>
                  <span className=''>₹{product.price.cost}</span>
                  <span className=''><strike>₹{product.price.mrp}</strike></span>
                  <span>{product.price.discount} off</span>
                </Typography>
                <ProductDetail product={product} />
                </Grid>
            </Grid>
        }
    </Box>
  )
}

export default DetailView
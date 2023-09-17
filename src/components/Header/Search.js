import React, { useEffect, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'
import { ListItem , List} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts} from '../../redux/action/ProductAction'


const Search = () => {
  const [text, setText] = useState();
  const [open, setOpen] = useState(true)


  const getText = (text) => {
    setText(text);
    setOpen(false)
  }

  const getProducts = useSelector(state => state.getProducts);
  const {products} = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])


  return (
    <div className='search'>
       <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for products, brands and more"
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => getText(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon  className='searchIcon'/>
        </IconButton>
   
        {
          text && 
            <List className='searchList' hidden={open}>
                {
                 products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        onClick={() => setOpen(true)}   d
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </List>
            }
     
    </div>  
  )
}

export default Search
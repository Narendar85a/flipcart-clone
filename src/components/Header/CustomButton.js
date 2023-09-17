import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography, Button, Box, Badge } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import LoginDialog from '../Login/LoginDialog';
import { useSelector } from 'react-redux';
import { LoginContext } from '../../context/ContextProvider';

const CustomButton = () => {
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useContext(LoginContext);

  const cartDetails = useSelector(state => state.cart);
  const { cartItems } = cartDetails;


  const openDialog = () => {
    setOpen(true);
  }

  return (
   <Box>
    {
        account ? <Profile account={account} setAccount={setAccount} /> : 
        <Link>
        <Button variant="contained" onClick={() => openDialog}>Login</Button>
        </Link>
    }
    <Link>
        <Typography>More</Typography>
    </Link>
    <Link to='/cart'>
    <IconButton aria-label="cart">
      <Badge badgeContent={cartItems?.length} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
    </Link>
    <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
   </Box>

  )
}

export default CustomButton
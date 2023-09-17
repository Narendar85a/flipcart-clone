import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  './Header.css'
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, Menu, List, ListItem} from '@mui/material';
import Search from './Search'
import CustomButton from './CustomButton'

const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => {
        <Box className='hList' onClick={handleClose}>
            <List>
                <ListItem>
                    <CustomButton />
                </ListItem>
            </List>
        </Box>
    }

  return (
   <AppBar className='header'>
     <Toolbar>
       <IconButton  className='menuButton' onClick={handleOpen}>
        <Menu />
       </IconButton> 

       <Drawer open={open} onClose={handleClose} >
          {list()}
       </Drawer>

       <Link to='/' className='hComponent' >
       <img src={logoURL} className='logoUrl' alt='' />
        <Box component='span' className='hContainer'>
            <Typography className='subHeading'>Explore<Box component='span'>Plus</Box></Typography>
            <img src={subURL} alt='' className='subUrl' />
        </Box>
       </Link>

       <Search className='search' />
       <span className='hButton'><CustomButton /></span>
     </Toolbar>
   </AppBar>
  )
}

export default Header
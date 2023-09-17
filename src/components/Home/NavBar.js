import React from 'react'
import { navData } from '../../constant/data'
import { Typography, Box } from '@mui/material'
import './NavBar.css'
 


const NavBar = () => {
 

  return (
    <Box className='navbar' >
       {
        navData.map(temp=> (
            <Box className='navbar-container' >
                <img src={temp.url} alt='' className='nav-img' />
                <Typography className='nav-text'>{temp.text}</Typography>
            </Box>
        ))
       }
    </Box>
  )
}

export default NavBar
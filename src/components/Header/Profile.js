import  {useState} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';
import { Link } from 'react-router-dom'

const Profile = ({account, setAccount}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Logout = () => {
    setAccount('');
  }

  return (
    <>
     <Link onClick ={handleClick}><Typography>{account}</Typography></Link>
      <Menu
        // id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        // MenuListProps={{
        //   'aria-labelledby': 'basic-button',
        // }}
      >
        <MenuItem onClick={() => { handleClose(); Logout(); }}>
           <PowerSettingsNew fontSize='small' color='primary' />
           <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Profile
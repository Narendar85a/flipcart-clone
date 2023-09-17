import  {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input'
import Box from '@mui/material/Box';
import './LoginDialog.css'
import { TextField } from '@mui/material';
import { authenticateLogin, authenticateSignup } from '../../service/Api';
// const ariaLabel = { 'aria-label': 'description' };

const loginInitialValues = {
  email: '',
  password: ''
};

const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: ''
};

const accountInitialValues = {
  login: {
      view: 'login',
      heading: 'Login',
      subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
      view: 'signup',
      heading: "Looks like you're new here",
      subHeading: 'Signup to get started'
  }
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

 const LoginDialog = ({}) => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = (loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState(false);
  const [account, toggleAccount] = useState(accountInitialValues.login)

  useEffect(() => {
    showError(false)
  }, [login]);

  const onValueChange = (e) => {
     setLogin({...login, [e.target.name]: e.target.value});
  }

  const onInputChange = () => {
    setSignup({...signup, [e.target.name]: e.target.value});
  }

  const loginUser = async () => {
    let response = await authenticateLogin(login)
    if(!response)
      showError(false);
    else {
      handleClose();
      setAccount(response.data.username);
    }  
  }

  const signupUser = async ()  => {
    let response = await authenticateSignup(signup)
    if(!response) return;
    handleClose();
    setAccount(signup.username);
  }

  const toggleSignup = () => {
     toggleAccount(accountInitialValues.signup)
  }

  const handleClickOpen = () => {
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login)
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog className='dialog'
        onClose={handleClose}
        // aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent className='login'>
         <Box style={{display:'flex'}}>
          <Box className='login-box1'>
            <Typography variant='h5'>Login</Typography>
            <Typography style={{marginTop: 20}}>Login with some...</Typography>
          </Box>
          {
            account.view === 'login' ?
            <Box className='login-box2'>
            <Input onChange={(e) => onValueChange(e)} placeholder="Enter Email/Mobile Number"  />
            { error && <Typography className='login-err'>Please enter valid Email ID/Mobile number</Typography> }
            <Input onChange={(e) => onValueChange(e)} className='login-input' placeholder="Enter Password"  />
            <Typography className='login-typo1' variant='caption'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
            <Button className='login-loginBtn' variant='contained' color='error' onClick={() => loginUser()} >Login</Button>
            <Typography className='login-typo1' variant='caption'>OR</Typography>
            <Button className='login-requestBtn' variant='outlined' >Request OTP</Button>
            <Typography className='login-typo2' variant='p'>New to Flipkart? Create an account</Typography>
            </Box> :
          
          <Box>
            <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
            <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
            <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
            <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
            <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
            <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
            <Button className='login-loginBtn' onClick={() => signupUser()}>Continue</Button> 
          </Box>
          }
         </Box>
        </DialogContent>
       
      </BootstrapDialog>
    </div>
  );
}

export default LoginDialog
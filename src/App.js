import { BrowserRouter } from 'react-router-dom';
// import Header from './components/Header/Header';
// import LoginDialog from  './components/Login/LoginDialog';
import { Home, NotFound } from './components/Default'
import './App.css';

function App() {
  return (
    <Home />
    
  //  <BrowserRouter>
  //   <Header />
  //   {/* <Switch> */}
  //     {/* <Route exact path='/' component={<Header />} /> */}
  //   {/* </Switch> */}
  //  </BrowserRouter>
  );
}

export default App;

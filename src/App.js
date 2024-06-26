import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signup } from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
        <Route path='/resetpassword/:token' element={<ResetPassword />}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

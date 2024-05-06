
// import logo from './logo.svg';
import './App.css'
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import ServiceConfirmation from './components/Services'
import Nav from './components/Nav'
import Order from './components/Order'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch';
import SalonAndServices from './components/SalonAndServices';
import Offer from './components/Offer'
import UserDetail from './components/UserDetail';
import React from 'react';
import { AuthProvider } from './components/auth';
import Profile from './components/Profile';
import Login from './components/Login';
import RequiredAuth from './components/RequiredAuth';
import Signup from './components/Signup';
import Footer from './components/footer';
const LazyAbout=React.lazy(()=>import('./components/About'))
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={
        <React.Suspense fallback="Loading...">
        <LazyAbout/>
        </React.Suspense>}/>
        <Route path='/ServiceConfirmation' element={<ServiceConfirmation/>}/>
        <Route path='/order-confirmation' element={<Order/>}/>
        <Route path='*' element={<NoMatch/>}/>
        <Route path='/SalonAndServices' element={<SalonAndServices/>}/>
    
        <Route path='/offer' element={<Offer/>}>
          <Route path=':userId' element={<UserDetail/>}/>
        </Route>
        <Route path='/profile' element={<RequiredAuth>
          <Profile/>
        </RequiredAuth>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>


        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
      
      </AuthProvider>
      <Footer/>
    </div>
  );
}

export default App;


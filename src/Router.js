import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/SignUp';
import Login from './pages/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import SignupSuccess from './pages/SignupSuccess/SignUpSuccess';
import Order from './pages/Order/Order';
import BuySuccess from './pages/BuySuccess/BuySuccess';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup-success" element={<SignupSuccess />} />
        <Route path="/order" element={<Order />} />
        <Route path="/buy-success" element={<BuySuccess />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;

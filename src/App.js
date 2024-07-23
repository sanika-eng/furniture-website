import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Furniture from './Pages/Furniture';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

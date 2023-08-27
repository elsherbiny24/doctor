import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './companats/home/Home';
import Navbars from './companats/navbar/Navbars';
import Footer from './companats/footer/Footer';

const App = () => {
  return (
   <BrowserRouter>
   <Navbars />
   <Routes>
    <Route path='/' element={<Home />} />
    
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App

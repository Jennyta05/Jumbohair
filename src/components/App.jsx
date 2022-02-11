import '../Styles/App.css'
import React, { useState } from 'react';
import { Home } from "../Pages/Home";

import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './NavBar';
import { Cart } from './ShoppingCart';



function App() {

  const [cardData, setCardData] = useState([])

  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home
            cardData={cardData}
            setCardData={setCardData}

          />} />

          <Route path="/Carrito" element={<Cart
            cardData={cardData}
            setCardData={setCardData}
          />} />
        </Routes>

      </HashRouter>
    </>
  )
}



export default App;

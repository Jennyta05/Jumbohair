import '../Styles/App.css'
import React,{useState} from 'react';
import {Home} from "../Pages/Home";

import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Navbar } from './NavBar';
import { shoppingCart } from './ShoppingCart';
 


function App(){

  const [cardData, setCardData ] = useState ([])

  return(
    <>
     <BrowserRouter>
     <Navbar/>
        <Routes>
        <Route path="/" element={<Home
        cardData={cardData}
        setCardData={setCardData}

        />}/>
        <Route path="/Carrito" element={<shoppingCart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App;

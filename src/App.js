import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Homepage from './components/Homepage/Homepage';
import Product from './components/Product/Product';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Navbar from './components/Navbar/Navbar';

function App() {
  /*
  const product1 = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
    "rate": 3.9,
    "count": 120
    }
    };
    const product2 = {
      "id": 1,
      "title": "Water Bottle",
      "price": 10.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "houseware",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
      "rate": 3.9,
      "count": 120
      } 
      };*/

  const [cartProducts, setCartProducts] = React.useState([]);    
  
  function addProductToCart(productToAdd){
    console.log(productToAdd);
    setCartProducts([...cartProducts, productToAdd])
  }
  
  function removeFromCart(productToRemove){
    console.log(productToRemove);
    const newCartProducts = cartProducts.filter(item => item.id !== productToRemove.id)
    console.log(newCartProducts);
    setCartProducts(newCartProducts);
  
  }
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/products" element={<Homepage />} />
        <Route path="/cart" element={<Cart cartProducts={cartProducts}
                            removeFromCart={removeFromCart}/>} />
        <Route path="/products/:id" element={<ProductDetail addProductToCart={addProductToCart}/>} />
        <Route path="*" element={<Navigate to="/products" replace />} />


        </Routes>
      </BrowserRouter>
{/*      <Cart />
      <Homepage />*/}

    </div>
  );
}

export default App;

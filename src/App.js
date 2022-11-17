import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Homepage from './components/Homepage/Homepage';
import Product from './components/Product/Product';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [cartProducts, setCartProducts] = React.useState([]);    
  
  const [productSearchValue, setProductSearchValue] = React.useState("");

  function addProductToCart(productToAdd){
    console.log(productToAdd);
    let newCart = [];

    const match = cartProducts.find(prod => prod.id === productToAdd.id);
    console.log('match', match);
    if (!match) {
      console.log("first buy");
      newCart = [...cartProducts, {...productToAdd, quantity: 1}];
      console.log("new cart" , newCart);
      setCartProducts(newCart);
    }
    else {
      console.log("increase qty");
      updateCartQuantity(match, true);

    }

   // setCartProducts([...cartProducts, productToAdd])
  }

function updateCartQuantity(productToChange, increase){
  let newqty= productToChange.quantity;
  if (increase){
    newqty++;
  } 
  else {
    newqty--;
  }
  let newCart = cartProducts.map(prod => prod.id === productToChange.id?
     {...productToChange, quantity: newqty} : prod)
     setCartProducts(newCart);
}



  
  function removeFromCart(productToRemove){
    console.log(productToRemove);
    const newCartProducts = cartProducts.filter(item => item.id !== productToRemove.id)
    console.log(newCartProducts);
    setCartProducts(newCartProducts);
  
  }
  
function handleProductSearch(searchInput){
  console.log("in app", searchInput)
  setProductSearchValue(searchInput);
}


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar handleProductSearch={handleProductSearch} />
      <Routes>
        <Route exact path="/products" element={<Homepage 
                                      productSearchValue={productSearchValue}/>} />
        <Route path="/cart" element={<Cart cartProducts={cartProducts}
                            removeFromCart={removeFromCart}
                            updateCartQuantity={updateCartQuantity} />} />
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

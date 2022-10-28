import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Homepage from './components/Homepage/Homepage';
import Product from './components/Product/Product'


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
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Cart />
      <Homepage />

    </div>
  );
}

export default App;

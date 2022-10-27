import './App.css';
import Product from './components/Product/Product'

function App() {
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
      };
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Product title = {product1.title}
      price={product1.price}
      category={product1.category}
      image={product1.image}/>

<Product title = {product2.title}
      price={product2.price}
      category={product2.category}
      image={product2.image}/>

    </div>
  );
}

export default App;

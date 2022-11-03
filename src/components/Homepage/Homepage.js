import axios from 'axios';
import React from 'react'
import Product from '../Product/Product';
import './Homepage.css';

function Homepage() {

    //state for product info
    const[products, setProducts] = React.useState([]);

        /*
        {
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
            },
            {
                "id": 2,
                "title": "Water Bottle",
                "price": 10.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "houseware",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                "rate": 3.9,
                "count": 120
                } 
                }*/
    
  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products")
    .then (response => {
        //console.log(response.data)
        setProducts(response.data);
    });
    console.log("fetch");
  }  

  React.useEffect(
    ()=>{
        console.log("page loaded");
        fetchProducts()
    }, []


  )

  return (
    <div>
        {/* <button onClick={fetchProducts}>Fetch Products</button> */}
        <div className="prod-cont">
            {products.map(item => {
            return <Product key={item.id}
                            id={item.id}
                            title={item.title} 
                            price={item.price}
                            category={item.category}
                            image={item.image}
            />
        })}
        </div>
    </div>
  )
}

export default Homepage
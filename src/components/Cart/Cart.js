import React from 'react';
import "./Cart.css";


function Cart(props) {
  return (
    <div class="cartContainer">
      <h1>Cart</h1>
      {
        props.cartProducts.map(item => (
          <div class ="cartLineItem"key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <button onClick={()=>props.removeFromCart(item)}>Remove From Cart</button>
          </div>
        )
          
        )
      }
    </div>
  )
}

export default Cart
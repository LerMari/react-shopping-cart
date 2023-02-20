import React from 'react'
import {Link} from 'react-router-dom'
import './Product.css'

function Product(props) {
  return (
    <Link to={`/products/${props.id}`}>
    <div class="productDisplay">
        <img className="product-img" src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.price}</p>
        <p>{props.category}</p>
        
    </div>
    </Link>
  )
}

export default Product

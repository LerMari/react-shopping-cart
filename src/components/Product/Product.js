import React from 'react'
import {Link} from 'react-router-dom'
import './Product.css'

function Product(props) {
  return (
    <Link to={`/products/${props.id}`}>
    <div class="productDisplay">
        <h1>{props.title}</h1>
        <p>{props.price}</p>
        <p>{props.category}</p>
        <img className="product-img" src={props.image} alt={props.title}/>
    </div>
    </Link>
  )
}

export default Product

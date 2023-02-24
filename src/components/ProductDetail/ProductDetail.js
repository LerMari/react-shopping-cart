import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import './ProductDetail.css'

function ProductDetail(props) {
  console.log("need param")
  const params = useParams();
  console.log(params.id);
  const [selectedProduct, setSelectedProduct] = React.useState();
  React.useEffect( () => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
    .then (res => {
      console.log(res.data);
      setSelectedProduct(res.data);
    })
  }, [])


  return (
    <div className="product-desc-container">
      <img src={selectedProduct?.image} alt={selectedProduct?.title}/>
      <div className="product-desc-text">
        <h3>{selectedProduct?.title}</h3>
        <h2>${selectedProduct?.price}</h2>
        <h4>Description</h4>
        <p>{selectedProduct?.description}</p>
        <button id="cart-button" onClick={()=>props.addProductToCart(selectedProduct)}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductDetail
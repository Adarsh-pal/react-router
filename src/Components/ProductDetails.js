import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {

  const params = useParams();
  const productId = params.productId;
  return (
    <div>Details of the product no. {productId}</div>
  )
  
}

export default ProductDetails
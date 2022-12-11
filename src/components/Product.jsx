import React from 'react'

const Product = ({ product, handleAddToCart }) => {
  return (
    <div>
        <img width="200" height="200" src={product.image} alt={product.title} />
        <div>
            <h1>{product.title}</h1>
            <span>{product.price}</span>
            <span>{product.description}</span>
        </div>
        <button type='button' onClick={handleAddToCart(product)}> comprar</button>
    </div>
  )
}

export default Product

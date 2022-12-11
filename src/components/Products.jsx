import { useContext } from 'react'
import Product from './Product'
import AppContext from '../context/AppContext'

const Products = () => {
  const { state, addToCart } = useContext(AppContext)
  const { products } = state

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div>
        {
            products.map((product) => (
                <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
            ))
        }
    </div>
  )
}

export default Products

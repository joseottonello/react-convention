import Products from '../components/Products'
import data from '../mock/data'

const Home = () => {
  return (
    <Products products={data.products} />
  )
}

export default Home
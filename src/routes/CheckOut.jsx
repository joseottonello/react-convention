import { Link } from 'react-router-dom'

const CheckOut = () => {
  return (
    <div>
      <div>
        <h1>lista de compras</h1>
        <div>
          <h2>nombre producto</h2>
          <span>precio</span>
        </div>
        <button type='button'> eliminar producto</button>
      </div>
      <div>
        <button>eliminar todo</button>
        <h1>valor de todo todo</h1>
        <Link to='/checkout/information'>
          <button>realizar compra</button>
        </Link>
      </div>
    </div>
  )
}

export default CheckOut

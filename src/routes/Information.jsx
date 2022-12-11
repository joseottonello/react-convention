import { Link } from 'react-router-dom'

const Information = () => {
  return (
    <div>
      <div>
        <div>
          <h2>informacion de contacto</h2>
        </div>
        <div>
          <form action="">
            <input type="text" placeholder='nombre' />
            <input type="text" placeholder='apellido' />
            <input type="text" placeholder='correo' />
            <input type="text" placeholder='telefono' />
            <input type="text" placeholder='ciudad' />
            <input type="text" placeholder='provincia' />
            <input type="text" placeholder='pais' />
          </form>
        </div>
        <div>
          <div>
            regresar
          </div>
          <div>
            <Link to='/checkout/payment'>
              <button>pagar</button>
            </Link>
            
          </div>
        </div>
      </div>
      <div>
        <h2>pedido:</h2>
        <div>
          <div>
            <span>
            nombre del producto
            </span>
            <span>
              precio
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information

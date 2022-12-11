import {  useContext } from 'react'
import AppContext from '../context/AppContext'
import { Link } from 'react-router-dom'

const Header = () => {
  const { state } = useContext(AppContext)
  const { cart } = state

  return (
    <div>
      Header
      <br />
      <Link to='/'>
        home
      </Link>
      <br />
      <Link to='/checkout'>
        checkout
      </Link>
      {
        cart.lenght > 0 &&
        <div>{cart.lenght}</div>
      }
      <hr />
    </div>
  )
}

export default Header

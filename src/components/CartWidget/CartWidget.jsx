import { useContext } from 'react'
import { Link } from 'react-router-dom'
import carrito from  '../../assets/images/carrito.png'
import '../CartWidget/CartWidget.css'
import { CartContext } from '../../context/CartContext'

const CarWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext)

  return (
    <div className='carrito'>
      <Link className='carrito-nombre' to="/carrito">
        Carrito
        <span className='cantidadCarrito'>{cantidadEnCarrito()}</span>
        </Link>
      {/* <div className='contador-carrito'>
        <h3 className='numero-carrito'>0</h3>
      </div> */}
      <img className='imagen-carrito' src={carrito} alt="" />
    </div>
  )
}

export default CarWidget
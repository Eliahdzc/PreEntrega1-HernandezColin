import carrito from  '../../assets/images/carrito.png'
import '../CartWidget/CartWidget.css'

const CarWidget = () => {
  return (
    <div className='carrito'>
      <h2 className='carrito-nombre'>Carrito</h2>
      <div className='contador-carrito'>
        <h3 className='numero-carrito'>0</h3>
      </div>
      <img className='imagen-carrito' src={carrito} alt="" />
    </div>
  )
}

export default CarWidget
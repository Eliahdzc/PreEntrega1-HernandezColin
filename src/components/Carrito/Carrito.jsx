import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { setIndexConfiguration } from '@firebase/firestore';

import './Carrito.css'

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container">
            <h1 className="main-title">Carrito</h1>

            {
                carrito.map((prod, index) => (
                    <div className="tarjeta-carrito">
                        <div>imagen</div>
                        <div key={`${prod.id}${index}`}>
                            <br />
                            <h3>{prod.titulo}</h3>
                            <p>Precio unit: ${prod.precio}</p>
                            <p>Precio total: ${prod.precio * prod.cantidad}</p>
                            <p>Cant: {prod.cantidad}</p>
                            <br />
                        </div>
                    </div>

                ))
            }

            {
                carrito.length > 0 ?
                <>
                    <h2>Precio total: ${precioTotal()}</h2>
                    <button onClick={handleVaciar}>Vaciar</button>
                    <Link to="/checkout">Finalizar compra</Link>
                </> :
                <>
                    <h2>El carrito está vacío :(</h2>
                <Link to="/Productos">Seguir Comprando</Link>

                </>
            }

        </div>
    )
}

export default Carrito
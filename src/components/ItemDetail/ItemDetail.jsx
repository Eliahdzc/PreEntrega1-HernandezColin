import "../ItemDetail/ItemDetail.css"
import { Link, useParams } from "react-router-dom"
import {itemPorId} from '../../data/data'
import { useState } from "react"

const ItemDetail = () => {

    const [item, setItem] = useState({})
    const {id, categoria} = useParams()

    // Obtiene el producto de acuerdo al id recibido en la ruta
    itemPorId(id)
        .then(res => {
            setItem(res)
        })
        .catch(err => {
            alert('No hay informacion disponible')
            console.error(err)
        })

    // Se asegura que el producto tenga la categoria solicitada
    // o manda un error para que se avise al usuario
    const categoriaCorrecta = categoria === item.categoria

    return (
        <div className="contanier">
            {categoriaCorrecta ?
                <div className="producto-detalle">
                    <img src={item.imagen} alt={item.titulo} />
                    <div>
                        <img src={item.descripcion} alt={item.titulo} />
                        <p className="precio-detalle">Precio : {item.precio}</p>
                    </div>

                </div>
                : <div>
                    <h1>No encontramos el producto</h1>
                </div>
            }
            <Link to= {`/productos/${categoria}`}>
                <button className="boton-detalles">Regresar</button> 
            </Link>
        </div>
    )
}

export default ItemDetail
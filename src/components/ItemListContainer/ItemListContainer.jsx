import '../ItemListContainer/ItemListContainer.css'
import {useState, useEffect} from "react"
import { datos } from "../../data/data"
import ItemList from '../ItemList/ItemList'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'

const ItemListContanier = () => {

    const [productos, setProductos] = useState([])

    const [titulo, setTitulo] = useState("Productos")

    const categoria = useParams().categoria

    console.log(titulo)

    useEffect(() => {
        datos()
            .then((res) => {
                if(categoria){
                    setProductos(res.filter((prod) => prod.categoria === categoria))
                    setTitulo(categoria)
                } else {

                    setProductos(res)
                    setTitulo("Productos")
                }
            })
    }, [categoria])


    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}

export default ItemListContanier
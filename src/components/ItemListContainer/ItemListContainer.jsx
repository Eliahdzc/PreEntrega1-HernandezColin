import '../ItemListContainer/ItemListContainer.css'
import {useState, useEffect} from "react"
// import { datos } from "../../data/data"
import ItemList from '../ItemList/ItemList'
// import Item from '../Item/Item'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../../firebase/config'

const ItemListContanier = () => {

    const [productos, setProductos] = useState([])

    const [titulo, setTitulo] = useState("Productos")

    const {categoria} = useParams()

    console.log("cate", categoria)

    useEffect(() => {
        // datos()
        //     .then((res) => {
        //         if(categoria){
        //             setProductos(res.filter((prod) => prod.categoria === categoria))
        //             setTitulo(categoria)
        //         } else {

        //             setProductos(res)
        //             setTitulo("Productos")
        //         }
        //     })
        
        // const productosRef = categoria ? query(collection(db, "Productos"), where("categoria", "==", "Brownies")) : collection(db, "Productos");
        // getDocs(productosRef)
        //     .then(resp => {
        //         const nuevosProductos = resp.docs.map ( doc => {
        //             const data = doc.data();
        //         })
        //         setProductos(nuevosProductos)
        //     })
        //     .catch(error => console.log(error) )
        //  }, [categoria])
        
        
        
        const productosRef = categoria ? query(collection(db, "Productos"), where("categoria", "==", categoria)) :collection(db, "Productos");
        getDocs(productosRef)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id}
                    })

                );
                setTitulo(categoria)
            })

    }, [categoria])


    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}

export default ItemListContanier
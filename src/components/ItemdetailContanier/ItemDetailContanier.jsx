import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    console.log('datailcont', id)
    useEffect(() => {

      const docRef = doc(db, "productos", id);
      getDoc(docRef)
        .then((resp) => {
          setItem(
            { ...resp.data(), id: resp.id }
          );
        })
        
      }, [id])
      
      return (
      console.log(item)
    //     <div>
    //     {item && <ItemDetail item={item} />}
    // </div>
  )
}

export default ItemDetailContainer













// import React, { useEffect, useState } from 'react'
// // import { itemPorId } from '../../data/data'
// import ItemDetail from '../ItemDetail/ItemDetail'
// import { useParams } from 'react-router-dom'
// import { doc, getDoc } from '@firebase/firestore'
// import { db } from '../../firebase/config'

// const ItemDetailContanier = () => {

//     const [item, setItem] = useState(null)
//     const id = useParams().id

//     useEffect(() => {
//         // itemPorId(item(id))
//         //     .then((res) => {
//         //         setItem(res)
//         //     })

//         const docRef = doc(db, "Productos", id);
//         getDoc(docRef)
//           .then((resp) => {
//             console.log('IDCOntainer ', resp.id);
//           })
//     }, [id])
//   return (
//     <div>
//        {item && <ItemDetail item={item} />}
//     </div>
//   )
// }

// export default ItemDetailContanier
import React, { useEffect, useState } from 'react'
import { itemPorId } from '../../data/data'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContanier = () => {

    const [item, setItem] = useState(null)
    const id = useParams().id

    useEffect(() => {
        itemPorId(item(id))
            .then((res) => {
                setItem(res)
            })
    }, [id])
  return (
    <div>
       {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContanier
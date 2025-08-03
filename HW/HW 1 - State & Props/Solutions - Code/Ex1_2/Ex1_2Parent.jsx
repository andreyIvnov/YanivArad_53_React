import React, { useState } from 'react'
import Ex1_2Child from './Ex1_2Child'

export default function Ex1_2ParentComp() {
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])

    const [isTable, setIsTable] = useState(false)
    const addProd = () => {

        setProducts([...products, product])
    }

    return (
        <div>

            Product Name: <input onChange={(e) => setProduct({ ...product, name: e.target.value })} type="text" /> <br />
            Product Price: <input onChange={(e) => setProduct({ ...product, price: +e.target.value })} type="number" /> <br />
            Product Color: <input onChange={(e) => setProduct({ ...product, color: e.target.value })} type="text" /> <br />
            <button onClick={addProd}>Save Product</button> <button onClick={() => setIsTable(!isTable)}>Show Products</button>


           {isTable ? <Ex1_2Child products={products} /> : null} 

        </div>
    )
}

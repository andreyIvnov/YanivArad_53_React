import React, { useState } from 'react'
import Demo6Product from './Demo6Product'

function Demo6Products() {

    const [products, setProducts] = useState([
        {id: 1, name: "TV", price: 500},
        {id: 2, name: "PC", price: 5000},
        {id: 3, name: "Watch", price: 1000},
    ])
    
  return (
    <div>
      
    <h1>Products: </h1>

    {
        products.map((prod) => <Demo6Product key={prod.id} prodData={prod} />)
    }

    </div>
  )
}

export default Demo6Products

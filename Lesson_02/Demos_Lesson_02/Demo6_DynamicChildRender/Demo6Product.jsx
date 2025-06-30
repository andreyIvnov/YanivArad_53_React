import React from 'react'

function Demo6Product(props) { // props: {prodData: {}}
  return (
    <div style={{border: "2px solid black"}}>
      <h1>Product Data: </h1>

        name: {props.prodData.name} <br />
        price: {props.prodData.price}$ <br />


    </div>
  )
}

export default Demo6Product

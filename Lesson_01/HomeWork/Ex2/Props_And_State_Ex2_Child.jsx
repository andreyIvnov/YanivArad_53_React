import { useState } from "react"

function Props_And_State_Ex2_Child({ products }) {

    return (
        <>
            <div>Products</div>
            {products && products.length > 0 &&
                <table border={2} style={{textAlign:'center', width:'400px'}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((prod, i )=> {
                        return (<tr key={i}>
                            <td>{prod.name}</td>
                            <td>{+prod.price}</td>
                            <td style={{backgroundColor: prod.color}}></td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            }
        </>
    )
}

export default Props_And_State_Ex2_Child
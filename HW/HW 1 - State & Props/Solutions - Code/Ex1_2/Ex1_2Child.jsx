import React from 'react'

export default function Ex1_2Child(props) {
    // props = {products: []}
    return (
        <div>

            <table border={1}>
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Color</th>
                    </tr>
                    {
                        props.products.map((product, index) => {
                            return <tr key={index}  >
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.color}</td>

                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

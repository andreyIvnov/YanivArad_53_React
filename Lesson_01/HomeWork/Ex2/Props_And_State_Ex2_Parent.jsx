import { useState } from "react"
import Props_And_State_Ex2_Child from "./Props_And_State_Ex2_Child"


function Props_And_State_Ex2_Parent() {
    const [newProduct, setNewProduct] = useState({})
    const [products, setProducts] = useState([])

    const [showTable, setShowTable] = useState(false)

    const OnHandleChanges = (e) => {

        const { name, value, checked, type } = e.target; // destruction
        debugger;
        setNewProduct({ ...newProduct, [name]: value })
    }

    return (
        <>
            <div>
                Name: <input type="text" name="name" onChange={OnHandleChanges} /> <br />
                Price: <input type="number" name="price" onChange={OnHandleChanges} /> <br />
                Color: <input type="color" name="color" onChange={OnHandleChanges} /> <br />
                <button onClick={() => setProducts([...products, newProduct])}>save</button>
                <button onClick={() => setShowTable(!showTable)}>Show Products</button> <br />

                {showTable &&
                    <Props_And_State_Ex2_Child products={products} />
                }
            </div>
        </>
    )
}

export default Props_And_State_Ex2_Parent
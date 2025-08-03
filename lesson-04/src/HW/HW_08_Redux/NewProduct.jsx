import { useState } from "react"
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function NewProduct() {
    const [newProdToOrder, setNewProdToOrder] = useState({})
    const dispatch = useDispatch();

    const handleChnage = (e) => {
        const { name, value } = e.target;
        setNewProdToOrder({ ...newProdToOrder, [name]: value });
    }

    const addProduct = () => {
        dispatch({ type: 'ADD_PRODUCT', payload: {...newProdToOrder, id: uuidv4()} })
    }

    return (
        <>
            <div style={{ border: '2px solid red', width: '500px' }}>
                <h2>Order New Product</h2>
                <strong>Name: </strong><input type="text" name="name" onChange={handleChnage} /> <br />
                <strong>Price: </strong><input type="number" name="price" onChange={handleChnage} /> <br />
                <button onClick={addProduct}>Add</button>
            </div>
        </>
    )
}

export default NewProduct
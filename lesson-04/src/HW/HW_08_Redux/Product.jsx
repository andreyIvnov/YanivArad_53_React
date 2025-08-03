import { useDispatch } from "react-redux"

function Product({ prodData }) {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: prodData.id })
  }

  return (
    <>
      <div style={{border:'2px solid green', width:'70%', textAlign:"center", marginBottom:'20px'}}>
        <h4>Product data</h4>
        <strong>Name: </strong> {prodData.name} <br />
        <strong>Price: </strong> {prodData.price} <br /> <br />
        <button onClick={removeProduct}>Remove</button>
      </div>
    </>
  )
}

export default Product
import { useDispatch } from 'react-redux';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: '3px solid green',
        width: '250px',
        height: '150px',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <h4>Product Data</h4>
      Name: {product.name} <br />
      Price: {product.price} <br />
      <br />
      <button onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}>
        Remove
      </button>
    </div>
  );
};

export default Product;

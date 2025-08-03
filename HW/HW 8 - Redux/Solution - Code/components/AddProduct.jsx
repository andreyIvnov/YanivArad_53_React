import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddProduct = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({ name: '', price: 0 });

  return (
    <div
      style={{
        border: '3px solid red',
        width: '300px',
        height: '150px',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <h3>Order New Product</h3>
      Name:{' '}
      <input
        type='text'
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <br />
      Price:{' '}
      <input
        type='number'
        onChange={(e) => setProduct({ ...product, price: +e.target.value })}
      />
      <br />
      <button onClick={() => dispatch({ type: 'ADD', payload: product })}>
        Add
      </button>
    </div>
  );
};

export default AddProduct;

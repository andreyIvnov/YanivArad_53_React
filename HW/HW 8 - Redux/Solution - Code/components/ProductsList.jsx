import { useSelector } from 'react-redux';
import Product from './Product';

const ProductsList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div
      style={{
        border: '3px solid blue',
        width: '300px',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <h3>Current Products in Order</h3>
      {products.map((prod) => {
        return <Product key={prod.id} product={prod} />;
      })}
    </div>
  );
};

export default ProductsList;

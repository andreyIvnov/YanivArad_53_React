import { useSelector } from "react-redux";
import Product from './Product';

function Products() {
  const products = useSelector(state => state.products)

  return (
    <>
      <div style={{border:'2px solid blue'}}>
        <h2>Current Products in Order</h2>
        <div style={{textAlign:'left'}}>
          {products && products.map(prod => {
            return(
              <Product key={prod.id} prodData={prod}/>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Products
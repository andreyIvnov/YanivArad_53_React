import { useEffect, useState } from 'react'
import axios from 'axios';

function Ex6_2Comp() {
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [usersFinalData, setUsersFinalData] = useState([])


  useEffect(() =>
  {
    async function getData()
    {
     
     let resp1 = await axios.get("https://fakestoreapi.com/users");
     let resp2 = await axios.get("https://fakestoreapi.com/products");
     let resp3 = await axios.get("https://fakestoreapi.com/carts");

      setUsers(resp1.data)
      setProducts(resp2.data)
      setCart(resp3.data)

    }
    getData();
  },[])

  useEffect(() =>
  {
    let usersFinaldata = [];
    
    //We'll build the final data for the users
    users.forEach(user =>
      {
        let userData = {};
        userData.name = user.name.firstname + " " + user.name.lastname;
        userData.email = user.email;
        userData.productsIds = [];
        userData.productsPics = [];

        ///Get users orders fron carts data
        //From each order get his products
       let orders =  cart.filter(x => x.userId == user.id);
       orders.forEach(order =>
        {
          //Get the products ids for every order for that user
          let prodIds = order.products.map(x => x.productId);
          //Add the products Ids to the user
          userData.productsIds = [...userData.productsIds, ...prodIds]
        })

        //remove duplocated product ids,because several orders has same products
        // and we want to save each product onky once
        let uniqueids = Array.from(new Set(userData.productsIds));
        userData.productsIds = uniqueids;

        //Get all products images for that user
        userData.productsIds.forEach(prodid =>
          {
            //Finds the product image by his id
            userData.productsPics.push((products.find(x => x.id == prodid)).image)
          })
      
        //Add the user's final data to the array
       usersFinaldata.push(userData);

      })

    // Save array of all users final data for rendering the table  
    setUsersFinalData(usersFinaldata)

  },[products.length]) //This useEffect will run only when the products data is ready


  return (
    <>
     
     <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {
            usersFinalData.map((user, index) =>
            {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {
                      user.productsPics.map((pic, index) =>
                      {
                        return (
                          <img src={pic} alt="product" key={index} style={{width: 50, height: 50}} />
                        )
                      })
                    }
                  </td>
                </tr>
              )
            })
          }
        </tbody>
     </table>
        
    </>
  )
}

export default Ex6_2Comp

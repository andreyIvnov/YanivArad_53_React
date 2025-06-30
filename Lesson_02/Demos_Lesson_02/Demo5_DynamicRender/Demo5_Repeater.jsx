import { useState } from "react"

function Demo5_Repeater() {
    console.log("Render!")
    const [cities, setCities] = useState(["Haifa", "Tel Aviv", "Jerusalem", "Eilat"])
    const [products, setProducts] = useState([
        { id: 1, name: "TV", price: 100 },
        { id: 2, name: "PC", price: 500 },
        { id: 3, name: "WATCH", price: 300 },

    ])

    const handleClick = () => {
        const city = "Netanya"
        setCities([...cities, city])
    }


    return (
        <div>
            <h1>Repeater Demo</h1>

            <h2>Cities</h2>
            <ul>
                {cities.map((city) => <li key={city}>{city}</li>)}
            </ul>

            <button onClick={handleClick} >Add City</button>
            <br />


            <h1>Repeater with objects</h1>

            <table border={1}>
                <tbody>
                    <tr >
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>

                    {
                        products.map((prod, index) => <tr key={prod.id}> <td>{prod.id}</td>  <td>{prod.name}</td>  <td>{prod.price}</td>   </tr> )
                    }

                </tbody>

            </table>



        </div>
    )
}

export default Demo5_Repeater

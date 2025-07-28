import { useEffect } from "react"
import {useParams} from "react-router-dom"
function Demo13_Details() {
    const obj = useParams()
    // obj => {id: "1", name: "avi"}

    useEffect(() => {
        console.log(obj)
    })

  return (
    <div>

    Product ID: {obj.id}
    </div>
  )
}

export default Demo13_Details
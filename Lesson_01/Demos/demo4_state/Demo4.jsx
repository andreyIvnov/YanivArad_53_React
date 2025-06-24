import { useState } from "react"
import Demo4ChildComp from "./Demo4Child"


// Hooks



function Demo4Comp() {
    console.log("Render Parent")
    const [name, setName] = useState("Avi")
    const [age, setAge] = useState(50)
    const [data, setData] = useState({name: "Ronit", age: 30})
    const [inputData, setInputData] = useState("")


    const handleClick = () => {
        setName(inputData)
    }

    const changeAge = () => {
        {
            setAge(100)
        }
    }

    const changeData = () => {
        setData({name: "Danit", age: 40})
    }


    return <div style={{ border: "2px solid green" }}>
        <h1>This is Demo 4</h1>

        <button onClick={handleClick}>Change name!</button>

        <input onChange={(event) => setInputData(event.target.value)} type="text" placeholder="change the name" />  {name}
        <br />
         <br />
         <br />
         <br />
         <br />
         <br />

        <button onClick={() => setName("Ronen")}>Change Name!</button>
        <button onClick={changeAge}>Change Age!</button>
        <button onClick={changeData}>Change Person Data</button>
        {name} <br />
        {age} <br />


        <Demo4ChildComp person={data} />

    </div>
}

export default Demo4Comp
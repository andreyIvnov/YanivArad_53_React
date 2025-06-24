import { useState } from "react"
import Ex_03_Components_Communication_Child from "./Ex_03_Components_Communication_Child"

function Ex_03_Components_Communication_Perent() {
    const [persons, setPersons] = useState([
        { name: 'Dana', age: 20, city: 'Haifa', isAdult: true },
        { name: 'Vered', age: 42, city: 'Eilat', isAdult: false },
    ])

    const addNewPerson = (person) => {
        setPersons([...persons, person])
    }

    return (
        <>
            <div style={{ backgroundColor: 'yellow', textAlign: 'left', width: '500px', padding: "5px 10px 5px 10px" }}>
                <h3>Perent Component</h3>
                {persons.map((per, index) => {
                    return (
                        <li key={index}>
                            {per.name} is {+(per.age)} years old, lives in {per.city} and He is {per.isAdult !== true ? "not" : ""} an Adult
                        </li>
                    )
                })}
            </div>
            <br />
            <div>
                <Ex_03_Components_Communication_Child addNewPerson={addNewPerson} />
            </div>
        </>
    )
}

export default Ex_03_Components_Communication_Perent
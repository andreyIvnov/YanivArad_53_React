import { useState } from "react"

function Ex_02_Dynamic_Rendering() {
    const [persons, setPersons] = useState([
        { name: 'Dana', age: 20, city: 'Haifa' },
        { name: 'Ron', age: 22, city: 'Tel Aviv' },
        { name: 'Dov', age: 31, city: 'Ashdod' },
        { name: 'Vered', age: 19, city: 'Eilat' },
    ])

    const [newPersonName, setNewPersonName] = useState("");
    const [newPersonAge, setNewPersonAge] = useState(0);
    const [newPersonCity, setNewPersonCity] = useState("");


    return (
        <>
            <div>
                <strong>Name: </strong><input type="text" name="name" onChange={e => setNewPersonName(e.target.value)} /><br />
                <strong>Age: </strong><input type="numper" name="age" onChange={e => setNewPersonAge(+(e.target.value))} /><br />
                <strong>City: </strong><input type="text" name="city" onChange={e => setNewPersonCity(e.target.value)} /><br />
                <button onClick={() => setPersons([...persons, { name: newPersonName, age: newPersonAge, city: newPersonCity }])}>Add</button>
            </div>
            <br /><br />

            <div>
                <table border={2} style={{ textAlign: 'left', width: '400px' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map((per, i) => {
                            return (<>
                                <tr key={i}>
                                    <td>{per.name}</td>
                                    <td>{per.age}</td>
                                    <td>{per.city}</td>
                                </tr>
                            </>)
                        })}
                    </tbody>
                </table>
            </div>

            <div>
                <ul style={{ textAlign: 'left' }}>
                    {persons.map((per, i) => {
                        return (<>
                            <div key={i}>
                                <li style={{ fontWeight: "bold" }}>{per.name}</li>
                                <ul>
                                    <li>Age: {per.age}</li>
                                    <li>City: {per.city}</li>
                                </ul>
                            </div>
                        </>)
                    })}
                </ul>

            </div>
        </>
    )
}

export default Ex_02_Dynamic_Rendering
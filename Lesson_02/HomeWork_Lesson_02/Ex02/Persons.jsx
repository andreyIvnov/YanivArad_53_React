import { useState } from "react"
import Person from "./Person"

function Persons() {

    const [persons, setPersons] = useState([
        {
            name: 'Avi', tasks: [
                { title: 'Clear room', completed: true },
                { title: 'Coock the pie', completed: false },
            ]
        },
        {
            name: 'Dana', tasks: [
                { title: 'Do the morning run', completed: false },
                { title: 'Eat the breackfest', completed: true },
            ]
        },
    ])

    return (
        <>
            <div style={{textAlign:'left', border:'8px solid green', width:'400px'}}>
                <h2>Persons List:</h2><br />
                {persons && persons.length > 0 && persons.map((per, i) => {
                    return (<div key={i}>
                        <Person personData={per} />
                    </div>)
                })}
            </div>
        </>
    )
}

export default Persons
import { useState } from "react"
import Ex2_Person from "./Ex2_Person"


export default function EX2_Persons() {
    const [persons, setPersons] = useState([
        { name: "Avi", tasks: [{ title: "TaskA", completed: true }, { title: "TaskB", completed: false }] },
        { name: "Dana", tasks: [{ title: "TaskC", completed: true }, { title: "TaskD", completed: false }] },
      

    ])
    return (
        <div style={{ border: "3px solid green", width: "50%" }}  >

            <h1>Persons:</h1>

            {
                persons.map((person) => {
                    return <Ex2_Person personData={person} />
                })
            }



        </div>
    )
}

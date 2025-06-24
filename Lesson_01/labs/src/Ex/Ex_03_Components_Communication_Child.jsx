import { useState } from "react"

function Ex_03_Components_Communication_Child({ addNewPerson }) {
    const [newPerson, setNewPerson] = useState({})
    
    const addPerson = () => {
        debugger;
        addNewPerson(newPerson)
    }

    const handelChange = (e) =>{
        const { name, value, checked, type } = e.target; // destruction

        setNewPerson({ ...newPerson, [name]: (type === 'checkbox' ? checked : value) })
    }

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                Name: <input type="text" name="name" onChange={handelChange}/><br />
                Age: <input type="number" name="age" onChange={handelChange}/><br />
                city: <select name='city'  onChange={handelChange}>
                    <option value="No"></option>
                    <option value="Haifa">Haifa</option>
                    <option value="Ashdod">Ashdod</option>
                    <option value="TLV">TLV</option>
                </select>
                <br />
                Is Adult: <input type="checkbox" name="isAdult"  onChange={handelChange}/> <button onClick={()=>{addPerson()}}>Add</button>
            </div>
        </>
    )
}

export default Ex_03_Components_Communication_Child